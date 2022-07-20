import { Component } from '@/core';

export class Nav extends Component {
  setup() {}
  template() {
    return `
    <nav class="navbar">
      <a href="/">HOME</a>
      <a href="/accordion">Accordion</a>
      <a href="/tabs">Tabs</a>
      <a href="/virtualscroll">Virtual Scroll</a>
    </nav>
    `;
  }
}
