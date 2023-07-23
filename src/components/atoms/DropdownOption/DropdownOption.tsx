import { FC } from 'react';
import { Dropdown, Icon } from 'react-native-magnus';
import { DropdownOptionProps } from './types';
import { useTranslation } from 'react-i18next';

const DropdownOption: FC<DropdownOptionProps> = ({ value, children }) => {
  const { i18n } = useTranslation();
  return (
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
};

export { DropdownOption };
