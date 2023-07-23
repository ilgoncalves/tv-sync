import { FC, createRef } from 'react';
import { SettingsProps } from './types';
import { useTranslation } from 'react-i18next';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { Div } from 'react-native-magnus';
import { SettingsOption } from '~/components/molecules';
import { I18nDropdown } from '~/components/molecules/I18nDropdown';

const Settings: FC<SettingsProps> = ({}) => {
  const { t } = useTranslation();
  const dropdownRef = createRef();

  return (
    <MainTemplate centralizeTitle title={t(TranslationsKeys.SettingsTitle)}>
      <Div px={12} mt={30}>
        <SettingsOption
          iconName="key"
          text={t(TranslationsKeys.SettingsSetPinNumber)}
          onPress={() => {}}
        />
        <SettingsOption
          iconName="fingerPrint"
          text={t(TranslationsKeys.SettingsEnableFingerprintAuthentication)}
          onPress={() => {}}
        />
        <SettingsOption
          iconName="languageTranslator"
          text={t(TranslationsKeys.SettingsChangeLanguage)}
          onPress={() => dropdownRef.current?.open()}
        />
        <I18nDropdown dropdownRef={dropdownRef} />
      </Div>
    </MainTemplate>
  );
};

export { Settings };
