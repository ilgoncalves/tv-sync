import React, { ElementType, FC } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import uuid from 'react-native-uuid';
import { colors } from '~/theme/colors';

const CustomBottomBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <BlurView
      style={styles.blurContainer}
      blurType="extraDark"
      blurAmount={1}
      reducedTransparencyFallbackColor="white">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = options.tabBarIcon as ElementType;

        return (
          <TouchableOpacity
            key={`bottom-tab-${uuid.v4().toString()}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              padding: 16,
            }}>
            <Icon focused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    position: 'absolute',
    bottom: 30,
    right: 0,
    left: 0,
    backgroundColor: colors['secondary.pinkLight'] + '1F',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 75,
    borderRadius: 16,
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export { CustomBottomBar };
