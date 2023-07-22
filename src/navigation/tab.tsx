import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { IconSvg } from '~/components/atoms';
import { IconName } from '~/components/atoms/IconSvg';

interface TabProps {
  icon: IconName;
  size: number;
}

export const Tab = ({ icon, size }: TabProps): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({ focused }) => (
      <IconSvg
        size={size}
        name={icon}
        color={focused ? 'primary.teal' : 'primary.white'}
      />
    ),
  };
};
