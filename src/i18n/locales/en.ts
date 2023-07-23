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
};

export default { translation: translations };
