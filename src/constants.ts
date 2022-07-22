import { Route } from '@types';
import { Home, AccordionPage, TabsPage, VirtualScrollPage } from '@/pages';

export const routes: Route[] = [
  { path: '/', name: 'Home', view: Home },
  { path: '/accordion', name: 'accordion', view: AccordionPage },
  { path: '/tabs', name: 'tabs', view: TabsPage },
  { path: '/virtualscroll', name: 'virtualscroll', view: VirtualScrollPage },
];
