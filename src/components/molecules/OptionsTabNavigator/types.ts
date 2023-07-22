export interface Tab {
  key: string;
  value: string;
}

export interface OptionsTabNavigatorProps {
  tabs: Tab[];
  activeTabKey: string;
  onTabPress: (tabKey: string) => void;
}
