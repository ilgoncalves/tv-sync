// Pattern is ${PageName}${Description} = '${pagename}-description'
export enum TranslationKeyEnum {
  LoginWelcome = 'login-welcome',
  HomeWelcome = 'home-welcome',
}

export type TranslationKey = { [K in TranslationKeyEnum]: string };

export default TranslationKeyEnum;
