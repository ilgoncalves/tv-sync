import { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import { OptionsTabNavigatorProps } from './types';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { getFontWeight } from '~/theme/components/Text';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '~/theme/colors';

const OptionsTabNavigator: FC<OptionsTabNavigatorProps> = ({
  tabs,
  activeTabKey,
  onTabPress,
}) => {
  return (
    <Div>
      <LinearGradient
        colors={[colors.transparent, colors['background.linearBackgroundDark']]}
        style={styles.gradient}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Div row justifyContent="space-between">
          {tabs.map(tab => (
            <TouchableOpacity
              activeOpacity={0.95}
              key={tab.key}
              onPress={() => onTabPress(tab.key)}>
              <Text
                px="xl"
                py="md"
                variant="medium"
                {...getFontWeight('bold')}
                color={
                  activeTabKey === tab.key
                    ? 'primary.pink'
                    : 'secondary.textOpaque'
                }
                onPress={() => onTabPress(tab.key)}>
                {tab.value}
              </Text>
            </TouchableOpacity>
          ))}
        </Div>
      </ScrollView>
    </Div>
  );
};

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
});

export { OptionsTabNavigator };
