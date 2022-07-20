import { Component } from '@/core';
import { $target, $state, Route } from '@types';
import { getViewport } from '@/utils';
import { routes } from '@/constants';

export default class App extends Component {
  $target: $target;
  $state: $state;
  $routes: Route[];

  setup() {
    this.$state = {
      viewport: getViewport(),
    };
    this.$routes = routes;
  }

  template() {
    return `
      <Nav></Nav>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    `;
  }

  init() {
    console.log(this.$target);
    console.log(this.$state);
    console.log(this.$routes);
  }
}
