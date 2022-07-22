import { Component } from '@/core';
import { Route } from '@types';

export class Nav extends Component {
  template() {
    return `
    <nav class="navbar">
      ${this.$props.routes
        .map((v: Route) => {
          return `<a href="${v.path}" data-link>${v.name}</a>`;
        })
        .join(' ')}
    </nav>
    `;
  }
}
