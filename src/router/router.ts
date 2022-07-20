import { Route } from '@types';
import { routes } from '@/constants';

export const router = async () => {
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

  // 활성화된 view 담기
  const view = new match.route.view();

  // #app 엘리먼트에 활성화된 view의 html 삽입
  console.log(view);
  // document.querySelector('#app').innerHTML = await view.getHtml();
};

export const navigateTo = (url: string): void => {
  window.history.pushState(null, null, url);
  router();
};
