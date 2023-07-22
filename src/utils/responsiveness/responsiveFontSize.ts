import { RFValue } from 'react-native-responsive-fontsize';

export function responsiveFontSize(fontSize: number) {
  const balancer = 3;
  return RFValue(fontSize - balancer);
}
