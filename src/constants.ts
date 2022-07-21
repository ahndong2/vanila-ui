import { Route } from '@types';
import { Home, Accordion, Tabs, VirtualizedList } from '@/components';

export const routes: Route[] = [
  { path: '/', name: 'Home', view: Home },
  { path: '/accordion', name: 'accordion', view: Accordion },
  { path: '/tabs', name: 'tabs', view: Tabs },
  { path: '/virtualscroll', name: 'virtualscroll', view: VirtualizedList },
];

const accordion = [
  { title: 'title1', content: 'content1', active: true },
  { title: 'title2', content: 'content2' },
  { title: 'title3', content: 'content3' },
];

const tabs = {
  activeTab: 2,
  tabList: [
    { label: 'title1', value: 'tab_1' },
    { label: 'title2', value: 'tab_2' },
    { label: 'title3', value: 'tab_3' },
  ],
};

export const STATE = {
  routes,
  accordion,
  tabs,
};
