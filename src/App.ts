import { Component } from '@/core';
import { $target } from '@types';
import { Nav, Main } from '@/pages';
import { router, navigateTo } from '@/router';
import { routes } from './constants';
export default class App extends Component {
  $target: $target;
  $main: $target;

  constructor(target: $target) {
    super(target);
    this.$target = target;
    this.init();
  }

  setup() {}

  template() {
    const nav = new Nav(this.$target, { routes: routes }).template();
    const main = new Main(this.$target).template();
    return `${nav}${main}`;
  }

  init() {
    this.$main = document.querySelector('#content');

    window.addEventListener('popstate', () => {
      router(this.$main);
    });

    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e: MouseEvent) => {
        const target = e.target as HTMLAnchorElement;
        if (target.matches('[data-link]')) {
          e.preventDefault();

          navigateTo(target.href, this.$main);
        }
      });

      router(this.$main);
    });
  }
}
