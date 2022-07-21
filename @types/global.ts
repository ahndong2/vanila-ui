export type $target = Element | HTMLElement | NodeListOf<Element> | any;

export interface ViewPortSize {
  viewPortWidth: number;
  viewPortHeight: number;
}
export interface Route {
  name: string;
  path: string;
  view?: any;
}
export interface Panel {
  title: string;
  content: string;
  active?: boolean;
}
export interface LabelValue {
  label?: string;
  value?: number | string;
}
export interface Tabs {
  activeTab: number | string;
  tabList: LabelValue[];
}

export interface $state {
  viewport?: ViewPortSize;
  routes?: Route[];
  accordion?: Panel[];
  tabs?: Tabs;
}
