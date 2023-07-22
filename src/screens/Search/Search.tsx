import { FC } from 'react';
import { SearchProps } from './types';
import { MainTemplate } from '~/components/templates';
import { useTranslation } from 'react-i18next';
import { TranslationsKeys } from '~/i18n';
import { Button } from 'react-native-magnus';
import { useNavigation } from '@react-navigation/native';

const Search: FC<SearchProps> = ({}) => {
  const { t } = useTranslation();
  const { navigate } = useNavigation();

  const goToSeriesDetails = () => {
    navigate('details', {
      screen: '/series-detail',
      params: {
        serieId: Math.random().toString(),
      },
    });
  };

  const goToPersonDetails = () => {
    navigate('details', {
      screen: '/person-detail',
      params: {
        personId: Math.random().toString(),
      },
    });
  };

  return (
    <MainTemplate title={t(TranslationsKeys.SearchTitle)}>
      <Button mb="sm" onPress={goToSeriesDetails} variant="solid">
        Go to Series Details
      </Button>
      <Button onPress={goToPersonDetails} variant="solid">
        Go to Person Details
      </Button>
    </MainTemplate>
  );
};

export { Search };
