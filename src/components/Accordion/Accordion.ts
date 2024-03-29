import { Component } from '@/core';
import { Panel } from '@types';

export class Accordion extends Component {
  setup() {
    const { accordion } = this.$props;
    this.$state = { accordion };
  }
  template() {
    return `
      <div class="accordion">
        ${this.$state.accordion
          .map((v: Panel, i: number) => {
            const className = v.active ? 'expended' : '';
            return `<div class="accordion-item" data-index=${i}>
                        <div class="accordion-header" role="button">
                            <strong>${v.title}</strong>
                            <span class="icon ${className}">
                            ${
                              v.active
                                ? `<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandLessIcon" tabindex="-1" title="ExpandLess"><path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>`
                                : '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon" tabindex="-1" title="ExpandMore"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>'
                            }
                            </span>
                        </div>
                        ${v.active ? `<div class="accordion-content">${v.content}</div>` : ''}
                    </div>`;
          })
          .join('')}
        </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '.accordion-header', (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      const idx = Number((target.closest('.accordion-item') as HTMLDivElement).dataset['index']);
      const accordionArr = JSON.parse(JSON.stringify(this.$state.accordion));
      accordionArr[idx].active = !accordionArr[idx].active;

      this.setState({
        accordion: accordionArr,
      });
    });
  }
}
