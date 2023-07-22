import { FC, useRef, useState } from 'react';
import { SeriesDetailsProps } from './types';
import { useTranslation } from 'react-i18next';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { Button, Div, Text } from 'react-native-magnus';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { DetailsStackParamList } from '~/navigation/types';
import { SerieDetailHeader } from '~/components/organisms';
import { Tab } from '~/components/molecules';

import { Animated, ScrollView } from 'react-native';

const SeriesDetails: FC<SeriesDetailsProps> = ({}) => {
  const { t } = useTranslation();
  const offset = useRef(new Animated.Value(0)).current;
  const { navigate } = useNavigation();
  const { params } =
    useRoute<RouteProp<DetailsStackParamList, '/series-detail'>>();

  const [activeTabKey, setActiveTabKey] = useState('tab1');

  const handleTabPress = (tabKey: string) => {
    setActiveTabKey(tabKey);
  };

  const tabs: Tab[] = [
    { key: 'synopsis', value: 'Synopsis' },
    { key: 'episodes', value: 'Episodes' },
    { key: 'recommendations', value: 'Recommendations' },
  ];

  const goToPersonDetails = () => {
    navigate('details', {
      screen: '/person-detail',
      params: { personId: Math.random().toString() },
    });
  };

  const seriesInfo = {
    imageUrl:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d7590f135861167.61ef6fb49f8e4.jpg',
    title: 'Peaky Blinders',
    rating: '8.1',
    minutes: 45,
    genres: ['Action', 'Adventure', 'Thriller'],
    episodes: 20,
    isFavorite: true,
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
          contentContainerStyle={{
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={0.0001}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            {
              useNativeDriver: false,
            },
          )}>
          <Text>{params.serieId}</Text>
          <Button mb="sm" onPress={goToPersonDetails} variant="solid">
            Go to Person Details
          </Button>
        </ScrollView>
      </Div>
    </MainTemplate>
  );
};

export { SeriesDetails };
