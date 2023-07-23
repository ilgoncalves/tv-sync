import { FC } from 'react';
import { FlatList } from 'react-native';
import { Div, Image, Text } from 'react-native-magnus';
import uuid from 'react-native-uuid';
import { EpisodeBodyProps } from './types';
import { getFontWeight } from '~/theme/components/Text';
import { TranslationsKeys } from '~/i18n';
import { useTranslation } from 'react-i18next';

const EPISODE_BODY_HEIGHT = 220;

const EpisodeBody: FC<EpisodeBodyProps> = ({ episode }) => {
  const { t } = useTranslation();
  return (
    <Div h={EPISODE_BODY_HEIGHT}>
      <Div mb="md" px="xl">
        <Text variant="medium" {...getFontWeight('bold')}>
          {episode.title}
        </Text>

        <Div flexDir="row" justifyContent="space-between" mt="md">
          <Text color="secondary.textOpaque" variant="small">
            {t(TranslationsKeys.EpisodeBodyDuration, {
              duration: episode.duration,
            })}
          </Text>
          <Text color="secondary.textOpaque" variant="small">
            {t(TranslationsKeys.EpisodeBodySeason, {
              season: episode.season,
            })}
          </Text>
        </Div>

        <Text textAlign="justify" variant="medium" my="md">
          {episode.description}
        </Text>

        <Text variant="medium" {...getFontWeight('bold')} mt="md">
          {t(TranslationsKeys.EpisodeBodyImagesOfTheScenes)}
        </Text>
      </Div>
      <FlatList
        data={episode.images}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
        ItemSeparatorComponent={() => <Div mx="sm" />}
        keyExtractor={() => `key-${uuid.v4().toString()}`}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} w={180} h={100} rounded="sm" />
        )}
      />
    </Div>
  );
};

export { EpisodeBody };
