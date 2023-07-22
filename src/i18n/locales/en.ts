import TranslationKeyEnum, { TranslationKey } from '../translation.keys';

const translations: TranslationKey = {
  [TranslationKeyEnum.LoginWelcome]: 'Welcome',
  [TranslationKeyEnum.HomeWelcome]: 'Welcome, {{name}}!',
};

export default { translation: translations };
