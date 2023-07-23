import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';
import { Text } from 'react-native-magnus';
import { ResultsTextProps } from './types';

const ResultsText: FC<ResultsTextProps> = ({ text }) => {
  const { t } = useTranslation();

  return text ? (
    <Text my={12} variant="large">
      {t(TranslationsKeys.SearchResultsFor, { name: text })}
    </Text>
  ) : null;
};

export { ResultsText };
