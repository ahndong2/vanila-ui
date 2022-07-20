import '~/styles/global.scss';
import '~/styles/style.scss';

import App from './App';
import { router, navigateTo } from '@/router';

window.addEventListener('popstate', () => {
  console.log('dddddd');
  router();
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e: Event) => {
    const target = e.target as HTMLElement;
    if (target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(target.href);
    }
  });

  router();
});

const app = new App(document.querySelector('#app'));
app.init();
