import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Div, Text } from 'react-native-magnus';
import { TranslationsKeys } from '~/i18n';
import { SeasonSwitcherProps } from './types';
import { IconSvg } from '~/components/atoms';
import { getFontWeight } from '~/theme/components/Text';

const SeasonSwitcher: FC<SeasonSwitcherProps> = ({
  totalSeasons,
  onSeasonChange,
}) => {
  const { t } = useTranslation();
  const [currentSeason, setCurrentSeason] = useState(1);

  const handleDecrease = () => {
    if (currentSeason > 1) {
      setCurrentSeason(prev => prev - 1);
      onSeasonChange(currentSeason - 1);
    }
  };

  const handleIncrease = () => {
    if (!!totalSeasons && currentSeason < totalSeasons) {
      setCurrentSeason(prev => prev + 1);
      onSeasonChange(currentSeason + 1);
    }
  };

  return (
    <Div
      flex={1}
      py="lg"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center">
      <IconSvg
        containerStyle={{
          p: 'lg',
          bg: 'backdrop',
        }}
        size={10}
        onPress={handleDecrease}
        disabled={currentSeason === 1}
        name="chevronLeft"
        stroke="secondary.textOpaque"
      />

      <Text
        color="secondary.textOpaque"
        variant="medium"
        {...getFontWeight('600')}
        px="lg">
        {t(TranslationsKeys.SeasonSwitcherCurrentSeason, { currentSeason })}
      </Text>

      <IconSvg
        containerStyle={{
          p: 'lg',
          bg: 'backdrop',
        }}
        size={10}
        onPress={handleIncrease}
        disabled={currentSeason === totalSeasons}
        name="chevronRight"
        stroke="secondary.textOpaque"
      />
    </Div>
  );
};

export { SeasonSwitcher };
