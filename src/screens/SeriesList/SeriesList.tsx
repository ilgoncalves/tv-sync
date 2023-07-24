import React, { FC, useEffect, useState } from 'react';
import { SeriesListProps } from './types';
import { Dimensions, FlatList, FlatListProps } from 'react-native';
import { SeriesCard } from '~/components/molecules';
import {
  EmptyDataComponent,
  LoadingContent,
  ResultsText,
  SeriesImage,
} from '~/components/atoms';
import { Div } from 'react-native-magnus';
import { Show } from '~/models';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useSearchStore, useShowStore } from '~/stores';

const screenWidth = Dimensions.get('window').width - 40;
const NUM_COLUMNS = 3;
const GAP = 12;

const AVAILABLE_SPACE = screenWidth - (NUM_COLUMNS - 1) * GAP;
const ITEM_SIZE = AVAILABLE_SPACE / NUM_COLUMNS;

const SeriesList: FC<SeriesListProps> = ({}) => {
  const {
    searchedShows,
    searchedQuery,
    setCurrentTabScreen,
    searchLoadingShows,
  } = useSearchStore();
  const { setDetailLoading } = useShowStore();
  const [isGridViewMode, setIsGridViewMode] = useState(false);

  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setCurrentTabScreen('serie-list');
    }
  }, [isFocused]);

  const onPressItem = (item: Show) => {
    setDetailLoading(true);
    navigation.navigate('details', {
      screen: '/series-detail',
      params: {
        serieId: item.id.toString(),
      },
    });
  };

  const renderCard = ({ item }: { item: Show }) => (
    <SeriesCard
      image={item.image?.medium}
      onPress={() => onPressItem(item)}
      title={item.name}
    />
  );

  const renderGrid = ({ item }: { item: Show }) => (
    <SeriesImage
      size={ITEM_SIZE}
      onPress={() => onPressItem(item)}
      image={item.image?.medium}
    />
  );

  const defaultFlatlisProps: Omit<
    FlatListProps<Show>,
    'renderItem' | 'data'
  > = {
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { flexGrow: 1, paddingBottom: 100 },
  };

  return (
    <Div px={20} flex={1}>
      <ResultsText
        isFilterOn={isGridViewMode}
        onFilterPress={() => setIsGridViewMode(prev => !prev)}
        text={searchedQuery}
      />
      {searchLoadingShows ? (
        <LoadingContent mb={100} />
      ) : isGridViewMode ? (
        <FlatList
          {...defaultFlatlisProps}
          key={'grid-flatlist'}
          ListEmptyComponent={<EmptyDataComponent />}
          data={searchedShows}
          contentContainerStyle={{ gap: GAP, paddingBottom: 120 }}
          columnWrapperStyle={{ gap: GAP }}
          renderItem={renderGrid}
          keyExtractor={item => `${'grid-item-'}${item.id}`}
          numColumns={3}
        />
      ) : (
        <FlatList
          {...defaultFlatlisProps}
          key={'grid-card'}
          data={searchedShows}
          ListEmptyComponent={<EmptyDataComponent />}
          renderItem={renderCard}
          keyExtractor={item => `${'card-item-'}${item.id}`}
        />
      )}
    </Div>
  );
};

export { SeriesList };
