import { FC } from 'react';
import { SettingsProps } from './types';
import { useTranslation } from 'react-i18next';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { Text } from 'react-native-magnus';

const Settings: FC<SettingsProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <MainTemplate centralizeTitle title={t(TranslationsKeys.SettingTitle)}>
      <Text>Settings</Text>
    </MainTemplate>
  );
};

export { Settings };
