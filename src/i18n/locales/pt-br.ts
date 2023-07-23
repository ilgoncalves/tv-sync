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
  [TranslationKeyEnum.SeasonSwitcherCurrentSeason]:
    'Temporada {{currentSeason}}',
  [TranslationKeyEnum.EpisodesCollapseEpisode]: 'Episódio {{episodeNumber}}',
  [TranslationKeyEnum.EpisodeBodyDuration]: '{{duration}} minutos',
  [TranslationKeyEnum.EpisodeBodySeason]: 'Season {{season}}',
  [TranslationKeyEnum.EpisodeBodyImagesOfTheScenes]: 'Imagens das cenas',
};

export default { translation: translations };
