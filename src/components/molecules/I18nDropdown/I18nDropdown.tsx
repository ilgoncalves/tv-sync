/* eslint-disable react/no-unstable-nested-components */
import React, { FC, ReactNode, Ref } from 'react';
import { Dropdown, Text, DropdownRef, Icon } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';
import TranslationKeyEnum from '~/i18n/translation.keys';

interface II18nDropdownProps {
  dropdownRef: Ref<DropdownRef>;
}
export const I18nDropdown: FC<II18nDropdownProps> = ({ dropdownRef }) => {
  const { i18n, t } = useTranslation();
  const Option = ({
    value,
    children,
  }: {
    value: string;
    children: ReactNode;
  }) => (
    <Dropdown.Option
      prefix={
        <Icon
          name="globe-outline"
          mr="lg"
          fontFamily="Ionicons"
          color="primary.pink"
          fontSize="headline5"
        />
      }
      value={value}
      py={20}
      px="xl"
      onSelect={language => i18n.changeLanguage(language)}
      block>
      {children}
    </Dropdown.Option>
  );

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
      <Option value="en">{t(TranslationsKeys.SetingsLanguageEnglish)}</Option>
      <Option value="pt">
        {t(TranslationsKeys.SetingsLanguagePortuguese)}
      </Option>
    </Dropdown>
  );
};
