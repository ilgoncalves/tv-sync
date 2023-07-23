export type Person = {
  id: number;
  url: string;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  birthday: string;
  deathday: string | null;
  gender: 'Male' | 'Female' | 'Other';
  image: {
    medium: string;
    original: string;
  };
  updated: number;
  _links: {
    self: {
      href: string;
    };
  };
  _embedded?: {
    castcredits: Array<{
      self: boolean;
      voice: boolean;
      _links: {
        show: {
          href: string;
        };
        character: {
          href: string;
        };
      };
    }>;
  };
};
