import { AccordionPage, TabsPage, VirtualListPage } from '@/pages';
import { router, navigateTo } from '@/router';

describe('Page', () => {
  const target = document.createElement('main');
  test('accordion', async () => {
    navigateTo('/accordion', target);
  });
});
