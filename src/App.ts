import { Component } from '@/core';
import { STATE } from '@/constants';
import { $target, $state } from '@types';
import { Nav, Main } from '@/pages';
import { router, navigateTo } from '@/router';
export default class App extends Component {
  $target: $target;
  $main: $target;

  constructor(target: $target) {
    super(target);
    this.$target = target;
    this.init();
  }

  setup() {
    this.$state = STATE;
    console.log(this.$state);
  }

  template() {
    const nav = new Nav(this.$target, this.$state).template();
    const main = new Main(this.$target).template();
    return `${nav}${main}`;
  }

  init() {
    this.$main = document.querySelector('#main');

    window.addEventListener('popstate', () => {
      router(this.$main, this.$state);
    });

    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.matches('[data-link]')) {
          e.preventDefault();
          navigateTo(target.href);
        }
      });

      router(this.$main, this.$state);
    });
  }
}
