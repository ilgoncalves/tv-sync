import { responsiveFontSize } from '~/utils/responsiveness/responsiveFontSize';

export type FontSize =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'large'
  | 'medium'
  | 'small'
  | 'formActive'
  | 'formDefault'
  | 'formLabel';

type CustomFontSize = {
  [K in FontSize]: number;
};

export const fontSize: CustomFontSize = {
  headline1: responsiveFontSize(30),
  headline2: responsiveFontSize(22),
  headline3: responsiveFontSize(20),
  headline4: responsiveFontSize(17),
  headline5: responsiveFontSize(16),
  large: responsiveFontSize(16),
  medium: responsiveFontSize(14),
  small: responsiveFontSize(12),
  formActive: responsiveFontSize(16),
  formDefault: responsiveFontSize(16),
  formLabel: responsiveFontSize(16),
};
