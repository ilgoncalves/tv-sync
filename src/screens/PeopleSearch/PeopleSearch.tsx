import React, { FC } from 'react';
import { PeopleSearchProps } from './types';
import { PeopleList } from '~/components/organisms';

const PeopleSearch: FC<PeopleSearchProps> = ({}) => {
  return <PeopleList />;
};

export { PeopleSearch };
