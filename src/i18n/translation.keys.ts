// Pattern is ${PageName}${Description} = '${pagename}-description'
export enum TranslationKeyEnum {
  LoginWelcome = 'login-welcome',
}

export type TranslationKey = { [K in TranslationKeyEnum]: string };

export default TranslationKeyEnum;
