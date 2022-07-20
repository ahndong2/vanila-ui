import { Route } from '@types';
import { Home, Accordion, Tabs, VirtualizedList } from '@/components';

export const routes: Route[] = [
  { path: '/', name: 'Home', view: Home },
  { path: '/accordion', name: 'Accordion', view: Accordion },
  { path: '/tabs', name: 'Tabs', view: Tabs },
  { path: '/virtualscroll', name: 'VirtualScroll', view: VirtualizedList },
];
