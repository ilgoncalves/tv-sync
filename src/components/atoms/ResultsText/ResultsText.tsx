import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';
import { Div, Text } from 'react-native-magnus';
import { ResultsTextProps } from './types';
import { IconSvg } from '../IconSvg';

const ResultsText: FC<ResultsTextProps> = ({
  text,
  isFilterOn,
  onFilterPress,
}) => {
  const { t } = useTranslation();

  return (
    <Div my={12} alignItems="center" flexDir="row">
      <Div flex={1}>
        {text && (
          <Text flex={1} variant="large">
            {t(TranslationsKeys.SearchResultsFor, { name: text })}
          </Text>
        )}
      </Div>
      {onFilterPress && (
        <IconSvg
          size={12}
          onPress={onFilterPress}
          name="filter"
          stroke="primary.pink"
          fill={isFilterOn ? 'primary.pink' : 'transparent'}
        />
      )}
    </Div>
  );
};

export { ResultsText };
