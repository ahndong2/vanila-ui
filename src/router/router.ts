import { $target } from '@types';
import { routes } from '@/constants';
const hljs = require('highlight.js');

export const router = async (target?: $target): Promise<void> => {
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[routes.length - 1],
      isMatch: true,
    };
  }
  // main view change
  new match.route.view(target);
  // main resize
  const scrollHeight = target.querySelector('.panel').scrollHeight + 60;
  console.log(`${scrollHeight}px`);
  target.style.height = `${scrollHeight}px`;

  // nav active Class
  const navList = document.querySelectorAll('nav a');
  navList.forEach((v: HTMLDivElement) => {
    v.classList.remove('active');
    if (v.dataset['path'] === location.pathname) {
      v.classList.add('active');
    }
  });
  // code block
  document.querySelectorAll('div.code').forEach((el) => {
    hljs.highlightElement(el);
  });
};

export const navigateTo = (url: string, target?: $target): void => {
  window.history.pushState(null, null, url);
  router(target);
};
