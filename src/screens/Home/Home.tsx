import { FC } from 'react';
import { HomeProps } from './types';
import { MainTemplate } from '~/components/templates';
import { TranslationsKeys } from '~/i18n';
import { Div, ScrollDiv } from 'react-native-magnus';
import { useTranslation } from 'react-i18next';
import { GenderList } from '~/components/organisms';
import { SearchBar } from '~/components/molecules';

const Home: FC<HomeProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <MainTemplate
      centralizeTitle={false}
      title={t(TranslationsKeys.HomeWelcome, { name: 'Igor' })}>
      <Div>
        <Div px="md">
          <SearchBar />
        </Div>
        <ScrollDiv>
          <GenderList sectionTitle="Drama/Comedy" data={[]} />
          <GenderList sectionTitle="Drama/Comedy" data={[]} />
          <GenderList sectionTitle="Drama/Comedy" data={[]} />
          <GenderList sectionTitle="Drama/Comedy" data={[]} />
        </ScrollDiv>
      </Div>
    </MainTemplate>
  );
};

export { Home };
