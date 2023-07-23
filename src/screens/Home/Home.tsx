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
  const mockSeries = [
    {
      image:
        'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg',
    },
    {
      image: 'https://flxt.tmsimg.com/assets/p185128_b_v9_ag.jpg',
    },
    {
      image:
        'https://static.wikia.nocookie.net/dublagem/images/2/29/La_Casa_de_Papel_Coreia.jpg/revision/latest?cb=20220616173249&path-prefix=pt-br',
    },
    {
      image:
        'https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg',
    },
  ];

  return (
    <MainTemplate
      centralizeTitle={false}
      title={t(TranslationsKeys.HomeWelcome, { name: 'Igor' })}>
      <Div px={20}>
        <SearchBar />
        <ScrollDiv>
          <GenderList sectionTitle="Drama/Comedy" data={mockSeries} />
          <GenderList sectionTitle="Drama/Comedy" data={mockSeries} />
          <GenderList sectionTitle="Drama/Comedy" data={mockSeries} />
          <GenderList sectionTitle="Drama/Comedy" data={mockSeries} />
        </ScrollDiv>
      </Div>
    </MainTemplate>
  );
};

export { Home };
