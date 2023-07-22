import { FC } from 'react';
import { SeriesDetailsProps } from './types';
import { useTranslation } from 'react-i18next';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { Button, Text } from 'react-native-magnus';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { DetailsStackParamList } from '~/navigation/types';

const SeriesDetails: FC<SeriesDetailsProps> = ({}) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();
  const { params } =
    useRoute<RouteProp<DetailsStackParamList, '/series-detail'>>();

  const goToPersonDetails = () => {
    navigate('details', {
      screen: '/person-detail',
      params: { personId: Math.random().toString() },
    });
  };

  return (
    <MainTemplate
      backButton
      centralizeTitle
      title={t(TranslationsKeys.SeriesDetailsTitle)}>
      <Button mb="sm" onPress={goToPersonDetails} variant="solid">
        Go to Person Details
      </Button>

      <Text>{params.serieId}</Text>
    </MainTemplate>
  );
};

export { SeriesDetails };
