import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { theme } from '../theme';
import { NavigationService } from '~/services/navigation.service';

interface Props {
  children: React.ReactNode;
}

export const Provider: React.FC<Props> = ({ children }: Props) => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NavigationContainer>
  );
};
