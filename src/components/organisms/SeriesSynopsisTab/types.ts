import { CastMember, Director } from '../CastAndCrew';

export interface SeriesSynopsisTabProps {
  synopsis: string;
  cast: CastMember[];
  director: Director;
}
