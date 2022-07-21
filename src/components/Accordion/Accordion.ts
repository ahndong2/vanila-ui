import { Component } from '@/core';
import { Panel } from '@types';

export class Accordion extends Component {
  template() {
    return `
      <section class="accordion">
        ${this.$state.accordion
          .map((v: Panel, i: number) => {
            const className = v.active ? 'expended' : '';
            return `<div class="menu menu_${i}">
                        <div class="header">
                            <div class="title">${v.title}</div>
                            <span class="icon ${className}">
                            ${
                              v.active
                                ? `<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandLessIcon" tabindex="-1" title="ExpandLess"><path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>`
                                : '<svg class="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ExpandMoreIcon" tabindex="-1" title="ExpandMore"><path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>'
                            }
                            </span>
                        </div>
                        ${v.active ? `<div class="content">${v.content}</div>` : ''}
                    </div>`;
          })
          .join('')}
        </section>
    `;
  }

  setEvent() {
    this.addEvent('click', '.header', (e: Event) => {
      const target = e.target as HTMLElement;
      const idx = Number(target.closest('.menu').classList[1].split('_')[1]);
      const accordionArr = JSON.parse(JSON.stringify(this.$state.accordion));
      accordionArr[idx].active = !accordionArr[idx].active;

      this.setState({
        accordion: accordionArr,
      });
    });
  }
}
