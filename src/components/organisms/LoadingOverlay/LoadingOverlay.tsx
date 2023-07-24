import React, { FC } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Div, Text } from 'react-native-magnus';
import { BlurView } from '@react-native-community/blur';
import { LoadingOverlayProps } from './types';
import { colors } from '~/theme/colors';
import { TranslationsKeys } from '~/i18n';
import { useTranslation } from 'react-i18next';
import { useShowStore } from '~/stores';

const LoadingOverlay: FC<LoadingOverlayProps> = ({}) => {
  const { t } = useTranslation();

  const { detailScreenLoading } = useShowStore();

  if (!detailScreenLoading) {
    return null;
  }

  return (
    <BlurView
      style={styles.absolute}
      blurType="extraDark"
      blurAmount={14}
      reducedTransparencyFallbackColor="white">
      <Div alignItems="center" justifyContent="center" h="100%" w="100%">
        <ActivityIndicator size="large" color={colors['primary.pink']} />
        <Text variant="headline5" mt="md">
          {t(TranslationsKeys.Loading)}
        </Text>
      </Div>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export { LoadingOverlay };
