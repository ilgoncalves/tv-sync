import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { SeriesDetailsProps } from './types';
import { useTranslation } from 'react-i18next';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { Div } from 'react-native-magnus';
import { RouteProp, useRoute } from '@react-navigation/native';
import { DetailsStackParamList } from '~/navigation/types';
import {
  SerieDetailHeader,
  SeriesEpisodesTab,
  SeriesRecommendationsTab,
  SeriesSynopsisTab,
} from '~/components/organisms';
import { Tab } from '~/components/molecules';

import { Animated, ScrollView } from 'react-native';
import { useShowStore } from '~/stores';

const SeriesDetails: FC<SeriesDetailsProps> = ({}) => {
  const { t } = useTranslation();
  const { getShowInfo, currentDetailedShow } = useShowStore();
  const offset = useRef(new Animated.Value(0)).current;
  const { params } =
    useRoute<RouteProp<DetailsStackParamList, '/series-detail'>>();

  useEffect(() => {
    getShowInfo(params.serieId);
  }, []);

  const [activeTabKey, setActiveTabKey] = useState('synopsis');

  const handleTabPress = (tabKey: string) => {
    setActiveTabKey(tabKey);
  };

  const tabs: Tab[] = [
    { key: 'synopsis', value: 'Synopsis' },
    { key: 'episodes', value: 'Episodes' },
    { key: 'recommendations', value: 'Recommendations' },
  ];

  const tabsContent: Record<string, ReactNode> = {
    synopsis: (
      <SeriesSynopsisTab
        director={{
          name: 'Steve Knight',
          responsibility: 'Screenwriter, Executive Producer, Creator ',
        }}
        synopsis={currentDetailedShow?.summary!}
        cast={currentDetailedShow?.getCast()!}
      />
    ),
    episodes: <SeriesEpisodesTab />,
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
          serieInfo={currentDetailedShow?.getShowInfoUi()!}
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
