import { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import { EmptyDataComponentProps } from './types';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';

const EmptyDataComponent: FC<EmptyDataComponentProps> = ({ message }) => {
  const { t } = useTranslation();
  return (
    <Div py={80} justifyContent="center" alignItems="center">
      <Text variant="headline5" color="secondary.textOpaque">
        {message ? message : t(TranslationsKeys.EmptyDataNoResults)}
      </Text>
    </Div>
  );
};

export { EmptyDataComponent };
