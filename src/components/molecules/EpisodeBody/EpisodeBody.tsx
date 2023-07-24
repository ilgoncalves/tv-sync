import { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import { EpisodeBodyProps } from './types';
import { getFontWeight } from '~/theme/components/Text';
import { TranslationsKeys } from '~/i18n';
import { useTranslation } from 'react-i18next';

const EPISODE_BODY_HEIGHT = 150;

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

        <Text ellipsizeMode="tail" textAlign="justify" variant="medium" my="md">
          {episode.description}
        </Text>
      </Div>
    </Div>
  );
};

export { EpisodeBody };
