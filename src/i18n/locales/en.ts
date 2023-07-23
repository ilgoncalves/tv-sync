import TranslationKeyEnum, { TranslationKey } from '../translation.keys';

const translations: TranslationKey = {
  [TranslationKeyEnum.LoginWelcome]: 'Welcome',
  [TranslationKeyEnum.HomeWelcome]: 'Welcome, {{name}}!',
  [TranslationKeyEnum.FavoritesTitle]: 'List of favorites',
  [TranslationKeyEnum.PersonDetailTitle]: 'Person Detail',
  [TranslationKeyEnum.SearchTitle]: 'Search',
  [TranslationKeyEnum.SeriesDetailsTitle]: 'Series Details',
  [TranslationKeyEnum.SettingTitle]: 'Settings',
  [TranslationKeyEnum.SeriesInformationsContentMinutes]: 'minutes',
  [TranslationKeyEnum.SeriesInformationsContentEpisodes]: 'episodes',
  [TranslationKeyEnum.CastAndCrewTitle]: 'Cast & Crew',
  [TranslationKeyEnum.SeasonSwitcherCurrentSeason]: 'Season {{currentSeason}}',
  [TranslationKeyEnum.EpisodesCollapseEpisode]: 'Episode {{episodeNumber}}',
  [TranslationKeyEnum.EpisodeBodyDuration]: '{{duration}} minutes',
  [TranslationKeyEnum.EpisodeBodySeason]: 'Temporada {{season}}',
  [TranslationKeyEnum.EpisodeBodyImagesOfTheScenes]: 'Images of the scenes',
};

export default { translation: translations };
