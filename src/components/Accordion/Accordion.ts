import { Component } from '@/core';

export class Accordion extends Component {
  template() {
    const { viewport } = this.$props;
    return `
      <ul>
      ddd
        ${viewport.viewPortWidth} /  ${viewport.viewPortHeight}
      </ul>
    `;
  }

  setEvent() {}
}
