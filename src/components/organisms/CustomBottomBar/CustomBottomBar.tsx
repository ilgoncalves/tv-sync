import React, { ElementType, FC } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { BlurView } from '@react-native-community/blur';
import { Div } from 'react-native-magnus';
import { isAndroid } from '~/utils/helpers/isAndroid';
import { AndroidBlur } from '~/components/atoms';

const CustomBottomBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const renderBlur = () => {
    return isAndroid() ? (
      <AndroidBlur radius={16} />
    ) : (
      <BlurView
        style={styles.blurContainer}
        blurType="dark"
        blurAmount={2}
        reducedTransparencyFallbackColor="white"
      />
    );
  };
  return (
    <Div
      position="absolute"
      bottom={30}
      h={75}
      right={0}
      rounded={16}
      flexDir="row"
      justifyContent="space-around"
      alignItems="center"
      mx={20}
      left={0}
      bg={'secondary.pinkLightBottomTab'}>
      {renderBlur()}
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
            navigation.navigate(route.name);
          }
        };

        const Icon = options.tabBarIcon as ElementType;

        return (
          <TouchableOpacity
            key={`bottom-tab-${uuid.v4().toString()}`}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={{
              padding: 16,
            }}>
            <Icon focused={isFocused} />
          </TouchableOpacity>
        );
      })}
    </Div>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 16,
  },
});

export { CustomBottomBar };
