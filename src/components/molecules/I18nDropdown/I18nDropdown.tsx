import { FC } from 'react';
import { Dropdown, Text } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';
import TranslationKeyEnum from '~/i18n/translation.keys';
import { I18nDropdownProps } from './types';
import { DropdownOption } from '~/components/atoms';

export const I18nDropdown: FC<I18nDropdownProps> = ({ dropdownRef }) => {
  const { t } = useTranslation();

  return (
    <Dropdown
      ref={dropdownRef}
      title={
        <Text variant="headline5" mx="xl" color="primary.pink" pb="md">
          {t(TranslationKeyEnum.SetingsSelectLanguage)}
        </Text>
      }
      mt="md"
      pb="2xl"
      showSwipeIndicator={true}
      roundedTop="xl">
      <DropdownOption value="en">
        {t(TranslationsKeys.SetingsLanguageEnglish)}
      </DropdownOption>
      <DropdownOption value="pt">
        {t(TranslationsKeys.SetingsLanguagePortuguese)}
      </DropdownOption>
    </Dropdown>
  );
};
