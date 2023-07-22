import { FC } from 'react';
import { PersonDetailProps } from './types';
import { MainTemplate } from '~/components/templates';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';
import { Button, Text } from 'react-native-magnus';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { DetailsStackParamList } from '~/navigation/types';

const PersonDetail: FC<PersonDetailProps> = ({}) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const { params } =
    useRoute<RouteProp<DetailsStackParamList, '/person-detail'>>();

  const goToSeriesDetails = () => {
    navigate('details', {
      screen: '/series-detail',
      params: {
        serieId: Math.random().toString(),
      },
    });
  };

  return (
    <MainTemplate
      backButton
      centralizeTitle
      title={t(TranslationsKeys.PersonDetailTitle)}>
      <Button mb="sm" onPress={goToSeriesDetails} variant="solid">
        Go to Series Details
      </Button>
      <Text>{params.personId}</Text>
    </MainTemplate>
  );
};

export { PersonDetail };
