import { Show } from '~/models';

export interface GenderListProps {
  data: Show[];
  sectionTitle: string;
  onItemPress: () => void;
}
