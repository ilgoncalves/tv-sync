import { FC, ReactNode } from 'react';
import { Div, StatusBar } from 'react-native-magnus';
import LinearGradient from 'react-native-linear-gradient';
import { Header, HeaderProps } from '~/components/molecules';
import { colors } from '~/theme/colors';
import { isAndroid } from '~/utils/helpers/isAndroid';

interface MainTemplateProps extends HeaderProps {
  children: ReactNode;
  hideHeader?: boolean;
}

const MainTemplate: FC<MainTemplateProps> = ({
  title,
  backButton = false,
  children,
  hideHeader = false,
  centralizeTitle = true,
}) => {
  return (
    <LinearGradient
      colors={[
        colors['background.linearBackgroundLight'],
        colors['background.linearBackgroundDark'],
      ]}
      style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Div flex={1} pt={isAndroid() ? 20 : 0}>
        {!hideHeader && (
          <Header
            centralizeTitle={centralizeTitle}
            title={title}
            backButton={backButton}
          />
        )}
        {children}
      </Div>
    </LinearGradient>
  );
};

export { MainTemplate };
