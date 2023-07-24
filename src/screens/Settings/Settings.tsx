import { FC, createRef } from 'react';
import { SettingsProps } from './types';
import { useTranslation } from 'react-i18next';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { Div, DropdownRef } from 'react-native-magnus';
import { I18nDropdown, SettingsOption } from '~/components/molecules';

const Settings: FC<SettingsProps> = ({}) => {
  const { t } = useTranslation();
  const dropdownRef = createRef<DropdownRef>();

  return (
    <MainTemplate centralizeTitle title={t(TranslationsKeys.SettingsTitle)}>
      <Div px={12} mt={30}>
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
