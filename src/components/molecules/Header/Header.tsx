import { FC } from 'react';
import { Div, Text } from 'react-native-magnus';
import { useNavigation } from '@react-navigation/native';
import { HeaderProps } from './types';
import { IconSvg } from '~/components/atoms';
import { SafeAreaView } from 'react-native';

const Header: FC<HeaderProps> = ({
  title,
  backButton = false,
  centralizeTitle = true,
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Div
        row
        alignItems="center"
        justifyContent={backButton ? 'space-between' : 'flex-start'}
        p="lg">
        <Div
          alignItems="flex-start"
          flex={centralizeTitle || backButton ? 1 : 0}>
          {backButton && (
            <IconSvg
              onPress={handleBack}
              size={10}
              stroke="secondary.pinkLight"
              name="chevronLeft"
            />
          )}
        </Div>
        <Text
          flex={8}
          variant="headline5"
          textAlign={centralizeTitle ? 'center' : 'left'}>
          {title}
        </Text>
        <Div alignItems="flex-end" flex={1} />
      </Div>
    </SafeAreaView>
  );
};

export { Header };
