import { FC } from 'react';
import { FlatList } from 'react-native';
import { Div, Text, Image } from 'react-native-magnus';
import { CastAndCrewProps } from './types';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';
import { getFontWeight } from '~/theme/components/Text';
import uuid from 'react-native-uuid';
import { EmptyDataComponent } from '~/components/atoms';

const CastAndCrew: FC<CastAndCrewProps> = ({ cast, director }) => {
  const { t } = useTranslation();
  return (
    <Div flex={1}>
      <Text px="lg" variant="medium" {...getFontWeight('bold')} mb="md">
        {t(TranslationsKeys.CastAndCrewTitle)}
      </Text>
      <FlatList
        data={cast}
        ListEmptyComponent={<EmptyDataComponent />}
        horizontal={true}
        renderItem={({ item }) => (
          <Div w={80} alignItems="center" m="md">
            <Image
              source={{ uri: item.imageURL }}
              h={54}
              w={54}
              rounded="circle"
              borderWidth={2}
              borderColor="primary.pink"
            />
            <Text numberOfLines={1} variant="small" mt="md">
              {item.name}adssadsad asds adsad
            </Text>
          </Div>
        )}
        keyExtractor={() => uuid.v4().toString()}
      />
      <Div borderTopWidth={0.4} borderColor="secondary.textLight" p="lg">
        <Text
          color="secondary.pinkLight"
          variant="small"
          {...getFontWeight('bold')}>
          {director.name}
        </Text>
        <Text variant="small" color="secondary.textOpaque">
          {director.responsibility}
        </Text>
      </Div>
    </Div>
  );
};

export { CastAndCrew };
