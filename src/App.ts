import { Component } from '@/core';
import { $target } from '@types';
import { Nav, Main } from '@/components';
import { router, navigateTo } from '@/router';
export default class App extends Component {
  $target: $target;
  $main: $target;

  constructor(target: $target) {
    super(target);
    this.$target = target;
  }

  setup() {}

  template() {
    const nav = new Nav(this.$target).template();
    const main = new Main(this.$target).template();
    return `${nav}${main}`;
  }

  init() {
    this.$main = document.querySelector('#main');

    window.addEventListener('popstate', () => {
      router(this.$main);
    });

    document.addEventListener('DOMContentLoaded', () => {
      document.body.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.matches('[data-link]')) {
          e.preventDefault();
          navigateTo(target.href);
        }
      });

      router(this.$main);
    });
  }
}
