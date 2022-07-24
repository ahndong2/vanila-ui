import { Component } from '@/core';
import { Route } from '@types';

export class Nav extends Component {
  template() {
    return `
    <nav>
      <h1>Vanila UI</h1>
      ${this.$props.routes
        .map((v: Route) => {
          return `<a href="${v.path}" data-link data-path="${v.path}">${v.name}</a>`;
        })
        .join(' ')}
    </nav>
    `;
  }
}
