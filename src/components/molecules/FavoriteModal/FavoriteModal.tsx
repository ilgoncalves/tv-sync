import React, { FC } from 'react';
import { Button, Div, Modal, Text } from 'react-native-magnus';
import { FavoriteModalProps } from './types';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';

const FavoriteModal: FC<FavoriteModalProps> = ({
  onConfirmPress,
  onDeclinePress,
  isVisible,
}) => {
  const { t } = useTranslation();

  return (
    <Modal isVisible={isVisible} bg="transparent">
      <Div flex={1} alignItems="center" justifyContent="center">
        <Div
          flexDir="column"
          justifyContent="space-evenly"
          alignItems="center"
          h={192}
          w={276}
          px={30}
          bg="background.linearBackgroundLight"
          rounded="md">
          <Text variant="headline3" color="primary.pink">
            {t(TranslationsKeys.ModalOpps)}
          </Text>
          <Text variant="headline4" textAlign="center" color="white">
            {t(TranslationsKeys.ModalRemoveOfFavoriteList)}
          </Text>
          <Div flexDir="row" w={'100%'} justifyContent="space-between">
            <Button
              rounded="md"
              w={96}
              variant="solid"
              onPress={onConfirmPress}>
              Yes
            </Button>
            <Button
              rounded="md"
              w={96}
              variant="solid"
              onPress={onDeclinePress}>
              No
            </Button>
          </Div>
        </Div>
      </Div>
    </Modal>
  );
};

export { FavoriteModal };
