// Pattern is ${PageName}${Description} = '${pagename}-description'
export enum TranslationKeyEnum {
  LoginWelcome = 'login-welcome',
  HomeWelcome = 'home-welcome',
  FavoritesTitle = 'favorites-title',
  PersonDetailTitle = 'person-detail-title',
  SearchTitle = 'search-title',
  SeriesDetailsTitle = 'series-details-title',
  SettingTitle = 'setting-title',
  SeriesInformationsContentMinutes = 'series-information-content-minutes',
  SeriesInformationsContentEpisodes = 'series-informations-content-episodes',
  CastAndCrewTitle = 'cast-and-crew-title',
}

export type TranslationKey = { [K in TranslationKeyEnum]: string };

export default TranslationKeyEnum;
