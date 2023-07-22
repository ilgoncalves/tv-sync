import TranslationKeyEnum, { TranslationKey } from '../translation.keys';

const translations: TranslationKey = {
  [TranslationKeyEnum.LoginWelcome]: 'Welcome',
  [TranslationKeyEnum.HomeWelcome]: 'Bem-vindo, {{name}}!',
};

export default { translation: translations };
