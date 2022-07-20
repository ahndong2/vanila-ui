import { ViewPortSize } from './state';

export type $target = Element | HTMLElement | NodeListOf<Element> | any;
export interface $state {
  viewport?: ViewPortSize;
}
export interface $events {
  subscribe?: () => {};
}

// router 내부 state 객체
export interface Route {
  name?: string;
  path?: string;
  view?: any;
}
