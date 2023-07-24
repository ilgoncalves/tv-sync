import { FC, useEffect, useState } from 'react';
import { HomeProps } from './types';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { Div } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '~/components/molecules';
import { useShowStore } from '~/stores';
import uuid from 'react-native-uuid';
import { GenderList } from '~/components/organisms';
import { ScrollView } from 'react-native';
import { LoadingContent } from '~/components/atoms';

const Home: FC<HomeProps> = ({}) => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');
  const { getAllShows, homeShows, searchHomeShow, homeLoading } =
    useShowStore();

  useEffect(() => {
    getAllShows();
  }, []);

  useEffect(() => {
    searchHomeShow(searchText);
  }, [searchText]);

  return (
    <MainTemplate
      centralizeTitle={false}
      title={t(TranslationsKeys.HomeWelcome, { name: 'Igor' })}>
      <Div flex={1}>
        <Div py={4} px="md">
          <SearchBar value={searchText} onChangeText={setSearchText} />
        </Div>
        <ScrollView
          contentContainerStyle={[{ flexGrow: 1, paddingBottom: 100 }]}>
          {homeLoading ? (
            <LoadingContent />
          ) : (
            Object.entries(homeShows).map(([key, value]) => (
              <GenderList
                key={`gender-${uuid.v4()}`}
                flatListKey={`list-${uuid.v4()}`}
                sectionTitle={key}
                data={value}
              />
            ))
          )}
        </ScrollView>
      </Div>
    </MainTemplate>
  );
};

export { Home };
