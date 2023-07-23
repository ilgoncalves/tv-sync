import TranslationKeyEnum, { TranslationKey } from '../translation.keys';

const translations: TranslationKey = {
  [TranslationKeyEnum.LoginWelcome]: 'Welcome',
  [TranslationKeyEnum.HomeWelcome]: 'Bem-vindo, {{name}}!',
  [TranslationKeyEnum.FavoritesTitle]: 'Lista de Favoritos',
  [TranslationKeyEnum.PersonDetailTitle]: 'Detalhe da Pessoa',
  [TranslationKeyEnum.SearchTitle]: 'Busca',
  [TranslationKeyEnum.SeriesDetailsTitle]: 'Detalhes da série',
  [TranslationKeyEnum.SettingTitle]: 'Configurações',
  [TranslationKeyEnum.SeriesInformationsContentMinutes]: 'minutos',
  [TranslationKeyEnum.SeriesInformationsContentEpisodes]: 'episódios',
  [TranslationKeyEnum.CastAndCrewTitle]: 'Cast & Crew',
};

export default { translation: translations };
