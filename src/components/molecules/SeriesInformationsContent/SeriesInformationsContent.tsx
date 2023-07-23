import { FC } from 'react';
import { SeriesInformationsContentProps } from './types';
import { Div, Text, Image } from 'react-native-magnus';
import { IconSvg } from '~/components/atoms';
import { TranslationsKeys } from '~/i18n';
import { useTranslation } from 'react-i18next';

const SeriesInformationsContent: FC<SeriesInformationsContentProps> = ({
  imageUrl,
  title,
  rating,
  minutes,
  genres,
  episodes,
  isFavorite,
  onToggleFavorite,
}) => {
  const { t } = useTranslation();

  return (
    <Div row p="md">
      <Div pb={32} w="35%" justifyContent="center" alignItems="center">
        <Image rounded="md" w="100%" h="100%" source={{ uri: imageUrl }} />
      </Div>
      <Div w="65%">
        <Div alignItems="flex-end">
          <IconSvg
            onPress={onToggleFavorite}
            containerStyle={{
              borderColor: 'primary.pink',
              borderWidth: 1,
              rounded: 'sm',
              p: 'xs',
            }}
            name="star"
            fill={isFavorite ? 'primary.pink' : 'transparent'}
            stroke="primary.pink"
          />
        </Div>
        <Div px="lg">
          <Text mb="lg" variant="headline5">
            {title}
          </Text>
          <Div mb="md" alignItems="center" flexDir="row">
            <IconSvg name="popcorn" fill="primary.pink" />
            <Text ml="sm" color="primary.pink" variant="medium">
              {rating}
            </Text>
          </Div>
          <Text mb="xs" variant="medium">
            {minutes} {t(TranslationsKeys.SeriesInformationsContentMinutes)}
          </Text>
          <Text mb="xs" variant="medium">
            {genres?.join(', ')}
          </Text>
          <Text mb="xs" variant="medium">
            {episodes} {t(TranslationsKeys.SeriesInformationsContentEpisodes)}
          </Text>
        </Div>
      </Div>
    </Div>
  );
};

export { SeriesInformationsContent };
