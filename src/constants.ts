import { Route } from '@types';
import { AboutMe, AccordionPage, TabsPage, VirtualListPage } from '@/pages';

export const routes: Route[] = [
  { path: '/accordion', name: 'Accordion', view: AccordionPage },
  { path: '/tabs', name: 'Tabs', view: TabsPage },
  { path: '/virtuallist', name: 'Virtual List', view: VirtualListPage },
  { path: '/', name: 'About', view: AboutMe },
];
