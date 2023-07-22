// Pattern is ${PageName}${Description} = '${pagename}-description'
export enum TranslationKeyEnum {
  LoginWelcome = 'login-welcome',
  HomeWelcome = 'home-welcome',
  FavoritesTitle = 'favorites-title',
  PersonDetailTitle = 'person-detail-title',
  SearchTitle = 'search-title',
  SeriesDetailsTitle = 'series-details-title',
  SettingTitle = 'setting-title',
  SeriesInformationsMinutes = 'series-information-minutes',
}

export type TranslationKey = { [K in TranslationKeyEnum]: string };

export default TranslationKeyEnum;
