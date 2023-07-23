import { FC, ReactNode, useRef, useState } from 'react';
import { SeriesDetailsProps } from './types';
import { useTranslation } from 'react-i18next';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { Div } from 'react-native-magnus';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { DetailsStackParamList } from '~/navigation/types';
import {
  SerieDetailHeader,
  SeriesEpisodesTab,
  SeriesRecommendationsTab,
  SeriesSynopsisTab,
} from '~/components/organisms';
import { Episode, Tab } from '~/components/molecules';

import { Animated, ScrollView } from 'react-native';

const SeriesDetails: FC<SeriesDetailsProps> = ({}) => {
  const { t } = useTranslation();
  const offset = useRef(new Animated.Value(0)).current;
  const { params } =
    useRoute<RouteProp<DetailsStackParamList, '/series-detail'>>();

  const [activeTabKey, setActiveTabKey] = useState('synopsis');

  const handleTabPress = (tabKey: string) => {
    setActiveTabKey(tabKey);
  };

  const tabs: Tab[] = [
    { key: 'synopsis', value: 'Synopsis' },
    { key: 'episodes', value: 'Episodes' },
    { key: 'recommendations', value: 'Recommendations' },
  ];

  const seriesInfo = {
    imageUrl:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d7590f135861167.61ef6fb49f8e4.jpg',
    title: 'Peaky Blinders',
    rating: '8.1',
    minutes: 45,
    genres: ['Action', 'Adventure', 'Thriller'],
    episodes: 20,
    isFavorite: true,
    summary:
      'An epic gangster drama set in the lawless streets of 1920s Birmingham.',
    cast: [
      {
        name: 'Actor One',
        imageURL: 'https://via.placeholder.com/150',
      },
      {
        name: 'Actor Two',
        imageURL: 'https://via.placeholder.com/150',
      },
      {
        name: 'Actor Three',
        imageURL: 'https://via.placeholder.com/150',
      },
      {
        name: 'Actor Three',
        imageURL: 'https://via.placeholder.com/150',
      },
      {
        name: 'Actor Three',
        imageURL: 'https://via.placeholder.com/150',
      },
      {
        name: 'Actor Three',
        imageURL: 'https://via.placeholder.com/150',
      },
    ],
  };

  const episodes: Episode[] = [
    {
      title: 'Episode 1',
      duration: '60',
      season: 1,
      description: 'This is the first episode.',
      images: [
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
      ],
    },
    {
      title: 'Episode 2',
      duration: '50',
      season: 1,
      description: 'This is the second episode.',
      images: [
        'https://via.placeholder.com/100',
        'https://via.placeholder.com/100',
      ],
    },
  ];

  const tabsContent: Record<string, ReactNode> = {
    synopsis: (
      <SeriesSynopsisTab
        director={{
          name: 'Steve Knight',
          responsibility: 'Screenwriter, Executive Producer, Creator ',
        }}
        synopsis={seriesInfo.summary}
        cast={seriesInfo.cast}
      />
    ),
    episodes: <SeriesEpisodesTab episodes={episodes} />,
    recommendations: <SeriesRecommendationsTab />,
  };

  return (
    <MainTemplate
      backButton
      centralizeTitle
      title={t(TranslationsKeys.SeriesDetailsTitle)}>
      <Div flex={1}>
        <SerieDetailHeader
          offset={offset}
          tabs={{
            activeTabKey,
            onTabPress: handleTabPress,
            tabs,
          }}
          serieInfo={seriesInfo}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={5}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            {
              useNativeDriver: false,
            },
          )}>
          {tabsContent[activeTabKey]}
        </ScrollView>
      </Div>
    </MainTemplate>
  );
};

export { SeriesDetails };
