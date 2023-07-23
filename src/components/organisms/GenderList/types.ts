import { Serie } from '~/types/series';

export interface GenderListProps {
  data: Serie[];
  sectionTitle: string;
  onItemPress: () => void;
}
