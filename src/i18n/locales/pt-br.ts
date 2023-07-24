import TranslationKeyEnum, { TranslationKey } from '../translation.keys';

const translations: TranslationKey = {
  [TranslationKeyEnum.LoginWelcome]: 'Welcome',

  [TranslationKeyEnum.HomeWelcome]: 'Bem-vindo, {{name}}!',
  [TranslationKeyEnum.SeriesDetailsTitle]: 'Detalhes da série',
  [TranslationKeyEnum.SettingTitle]: 'Configurações',
  [TranslationKeyEnum.SeriesInformationsContentMinutes]: 'minutos',
  [TranslationKeyEnum.SeriesInformationsContentEpisodes]: 'episódios',
  [TranslationKeyEnum.CastAndCrewTitle]: 'Cast & Crew',
  [TranslationKeyEnum.SeasonSwitcherCurrentSeason]:
    'Temporada {{currentSeason}}',
  [TranslationKeyEnum.EpisodesCollapseEpisode]: 'Episódio {{episodeNumber}}',
  [TranslationKeyEnum.EpisodeBodyDuration]: '{{duration}} minutos',
  [TranslationKeyEnum.EpisodeBodySeason]: 'Season {{season}}',
  [TranslationKeyEnum.EpisodeBodyImagesOfTheScenes]: 'Imagens das cenas',
  [TranslationKeyEnum.HomeSchedulesForNextWeek]: 'Horários para próxima semana',
  [TranslationKeyEnum.HomeSearch]: 'Buscar',

  [TranslationKeyEnum.ActorDetailSeriesThatHasActed]: 'Série que atuou',
  [TranslationKeyEnum.ActorDetailTitle]: 'Detalhes do ator',
  [TranslationKeyEnum.ActorDetailYears]: 'Idade',

  [TranslationKeyEnum.ListOfFavoritesYouDontHaveFavorites]:
    'Você não tem favoritos ainda!',
  [TranslationKeyEnum.ListOfFavoritesTitle]: 'Lista de Favoritos',

  [TranslationKeyEnum.EmptyDataNoResults]: 'Sem resultados',

  [TranslationKeyEnum.ModalOpps]: 'Opps!',
  [TranslationKeyEnum.ModalYes]: 'Sim',
  [TranslationKeyEnum.ModalNo]: 'Não',
  [TranslationKeyEnum.ModalRemoveOfFavoriteList]:
    'Você quer remover esta série da lista de favoritos?',

  [TranslationKeyEnum.SearchTitle]: 'Buscar',
  [TranslationKeyEnum.SearchResultsFor]: 'Resultados para "{{name}}" !',
  [TranslationKeyEnum.SearchNoResultsFound]: 'Nenhum Resultado Encontrado',
  [TranslationKeyEnum.SearchPeople]: 'Pessoas',
  [TranslationKeyEnum.SearchSeriesList]: 'Lista de Series',

  [TranslationKeyEnum.SettingsSetPinNumber]: 'Insira o número PIN',
  [TranslationKeyEnum.SettingsTitle]: 'Configurações',
  [TranslationKeyEnum.SettingsChangeLanguage]: 'Alterar idioma',
  [TranslationKeyEnum.SettingsEnableFingerprintAuthentication]:
    'Habilitar autenticação biométrica',
  [TranslationKeyEnum.SetingsSelectLanguage]: 'Selecione o idioma',
  [TranslationKeyEnum.SetingsLanguagePortuguese]: 'Português',
  [TranslationKeyEnum.SetingsLanguageEnglish]: 'Inglês',
};

export default { translation: translations };
