type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export type Leaves<T> = T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
  : '';

type UIColors<T, E extends string> = `${E}.${Exclude<keyof T, symbol>}`;

const getTokenizedColor = <T extends { [x: string]: string }, E extends string>(
  tokens: T,
  basePropertyName: E,
): Record<UIColors<T, E>, string> => {
  const result: any = Object.keys(tokens).reduce(
    (newObj, prop) => ({
      ...newObj,
      [`${basePropertyName}.${prop}`]: tokens[prop],
    }),
    {},
  );
  return result;
};

const primary = {
  pink: '#F00878',
  blue: '#1E212E',
};

const secondary = {
  blueLight: '#272A3B',
  pinkLight: '#FDDAEB',
  blueOpaque: '#313043',
  textLight: '#EAECF1',
  textOpaque: '#FEE6F2',
};

const variants = {
  cardBackground: '#171923',
};

const background = {
  linearBackgroundLight: '#1E212E',
  linearBackgroundDark: '#090A0E',
};

export const colors = {
  white: '#FFFFFF',
  offwhite: '#E4E4EC',
  black: '#000000',
  transparent: 'rgba(0,0,0,0)',
  backdrop: 'rgba(0,0,0,0.5)',

  ...getTokenizedColor<typeof primary, 'primary'>(primary, 'primary'),
  ...getTokenizedColor<typeof secondary, 'secondary'>(secondary, 'secondary'),
  ...getTokenizedColor<typeof variants, 'variants'>(variants, 'variants'),
  ...getTokenizedColor<typeof background, 'background'>(
    background,
    'background',
  ),
};
