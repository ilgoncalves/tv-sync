import React, { FC } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { Div, Text } from 'react-native-magnus';
import { BlurView } from '@react-native-community/blur';
import { LoadingOverlayProps } from './types';
import { colors } from '~/theme/colors';
import { TranslationsKeys } from '~/i18n';
import { useTranslation } from 'react-i18next';
import { isAndroid } from '~/utils/helpers/isAndroid';
import { AndroidBlur } from '~/components/atoms';
import { useShowStore } from '~/stores';

const LoadingOverlay: FC<LoadingOverlayProps> = ({}) => {
  const { t } = useTranslation();

  const { detailScreenLoading } = useShowStore();

  if (!detailScreenLoading) {
    return null;
  }

  const renderBlur = () => {
    return isAndroid() ? (
      <AndroidBlur opacity={0.95} />
    ) : (
      <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={14}
        reducedTransparencyFallbackColor="white"
      />
    );
  };

  return (
    <View style={styles.absolute}>
      {renderBlur()}
      <Div
        position="absolute"
        alignItems="center"
        zIndex={11}
        justifyContent="center"
        h="100%"
        w="100%">
        <ActivityIndicator size="large" color={colors['primary.pink']} />
        <Text variant="headline5" mt="md">
          {t(TranslationsKeys.Loading)}
        </Text>
      </Div>
    </View>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export { LoadingOverlay };
