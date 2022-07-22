import { $target } from '@types';
import { routes } from '@/constants';

export const router = async (target?: $target) => {
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

  new match.route.view(target);
};

export const navigateTo = (url: string, target?: $target): void => {
  window.history.pushState(null, null, url);
  router(target);
};
