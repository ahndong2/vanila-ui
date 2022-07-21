import { $state, $target } from '@types';
import { routes } from '@/constants';

export const router = async (target?: $target, state?: $state) => {
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

  new match.route.view(target, state);
};

export const navigateTo = (url: string): void => {
  window.history.pushState(null, null, url);
  router();
};
