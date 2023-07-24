// Pattern is ${PageName}${Description} = '${pagename}-description'
export enum TranslationKeyEnum {
  Loading = 'loading',
  LoginWelcome = 'login-welcome',

  //Home
  HomeWelcome = 'home-welcome',
  HomeSearch = 'home-search',
  HomeSchedulesForNextWeek = 'home-schedules-for-next-week',

  //Actor Detail
  ActorDetailTitle = 'actor-detail-title',
  ActorDetailYears = 'actor-detail-years',
  ActorDetailSeriesThatHasActed = 'actor-detail-series-that-acted',

  //ListOfFavorites
  ListOfFavoritesTitle = 'list-of-favorites-title',
  ListOfFavoritesYouDontHaveFavorites = 'favorites-you-dont-have-favorites-yet',

  //Search
  SearchTitle = 'search-title',
  SeriesDetailsTitle = 'series-details-title',
  SettingTitle = 'setting-title',
  SeriesInformationsContentMinutes = 'series-information-content-minutes',
  SeriesInformationsContentEpisodes = 'series-informations-content-episodes',
  CastAndCrewTitle = 'cast-and-crew-title',
  SeasonSwitcherCurrentSeason = 'season-switcher-current-season',
  EpisodesCollapseEpisode = 'episodes-collapse-episode',
  EpisodeBodyDuration = 'episode-body-duration',
  EpisodeBodySeason = 'episode-body-season',
  EpisodeBodyImagesOfTheScenes = 'episode-body-images-of-the-scenes',
  SearchSeriesList = 'search-series-list',
  SearchPeople = 'search-peoples',
  SearchResultsFor = 'search-results-for',
  SearchNoResultsFound = 'search-no-results-found',

  //Settings
  SettingsTitle = 'settings-title',
  SettingsSetPinNumber = 'settings-set-pin-number',
  SettingsEnableFingerprintAuthentication = 'settings-enable-fingerprint-authentication',
  SettingsChangeLanguage = 'settings-change-language',
  SetingsSelectLanguage = 'settings-select-language',
  SetingsLanguageEnglish = 'settings-language-english',
  SetingsLanguagePortuguese = 'settings-language-portuguese',

  EmptyDataNoResults = 'empty-data-no-results',

  //Modal
  ModalRemoveOfFavoriteList = 'modal-remove-of-favorite-list',
  ModalOpps = 'modal-opps',
  ModalYes = 'modal-yes',
  ModalNo = 'modal-no',
}

export type TranslationKey = { [K in TranslationKeyEnum]: string };

export default TranslationKeyEnum;
