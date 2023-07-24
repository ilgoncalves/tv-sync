import TranslationKeyEnum, { TranslationKey } from '../translation.keys';

const translations: TranslationKey = {
  [TranslationKeyEnum.LoginWelcome]: 'Welcome',

  [TranslationKeyEnum.HomeWelcome]: 'Welcome, {{name}}!',
  [TranslationKeyEnum.HomeSchedulesForNextWeek]: 'Schedules for next Week',
  [TranslationKeyEnum.HomeSearch]: 'Search',

  [TranslationKeyEnum.ActorDetailSeriesThatHasActed]: 'Series that has acted',
  [TranslationKeyEnum.ActorDetailTitle]: 'Acor Details',
  [TranslationKeyEnum.ActorDetailYears]: '{{years}}, Years',

  [TranslationKeyEnum.ListOfFavoritesTitle]: 'List of Favorites',
  [TranslationKeyEnum.ListOfFavoritesYouDontHaveFavorites]:
    "You don't have favorites yet!",

  [TranslationKeyEnum.ModalOpps]: 'Opps!',
  [TranslationKeyEnum.ModalYes]: 'Yes',
  [TranslationKeyEnum.ModalNo]: 'No',
  [TranslationKeyEnum.ModalRemoveOfFavoriteList]:
    'Do you want to remove this series from the favorites list?',

  [TranslationKeyEnum.EmptyDataNoResults]: 'No Results',
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
  [TranslationKeyEnum.SearchResultsFor]: 'Results for "{{name}}" !',
  [TranslationKeyEnum.SearchNoResultsFound]: 'No results found!',
  [TranslationKeyEnum.SearchPeople]: 'People Search',
  [TranslationKeyEnum.SearchSeriesList]: 'Series List',

  [TranslationKeyEnum.SettingsSetPinNumber]: 'Set PIN number',
  [TranslationKeyEnum.SettingsTitle]: 'Settings',
  [TranslationKeyEnum.SettingsChangeLanguage]: 'Change the language',

  [TranslationKeyEnum.SettingsEnableFingerprintAuthentication]:
    'Enable fingerprint authentication',
  [TranslationKeyEnum.SetingsSelectLanguage]: 'Select Language',
  [TranslationKeyEnum.SetingsLanguagePortuguese]: 'Portuguese',
  [TranslationKeyEnum.SetingsLanguageEnglish]: 'English',
};

export default { translation: translations };
