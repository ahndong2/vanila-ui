import { Route } from '@types';
import { Accordion } from '@/components';

export const routes: Route[] = [
  { path: '/', name: '', view: () => console.log('Viewing Dashboard') },
  { path: '/accordion', name: 'Accordion', view: Accordion },
];
