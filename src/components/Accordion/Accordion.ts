import { Component } from '@/core';

export class Accordion extends Component {
  setup() {
    this.$state = {
      accordion: [
        { title: 'title1', content: 'content1', active: true },
        { title: 'title2', content: 'content2' },
        { title: 'title3', content: 'content3' },
      ],
    };
  }
  template() {
    console.log(this.$state);
    return `
      <section id="accordion">
        ${this.$state.accordion
          .map((v, i) => {
            const className = v.active ? 'active' : '';
            return `<div class="menu menu_${i} ${className}">
                        <div class="header">
                            <div class="title">${v.title}</div>
                            <span class="icon">+</span>
                        </div>
                        <div class="content">
                            ${v.content}
                        </div>
                    </div>`;
          })
          .join('')}
        </section>
    `;
  }

  setEvent() {
    this.addEvent('click', '.icon', (e: Event) => {
      const target = e.target as HTMLElement;
      console.log(target);
      const idx = Number(target.closest('.menu').classList[1].split('_')[1]);
      const accordionArr = JSON.parse(JSON.stringify(this.$state.accordion));
      accordionArr[idx].active = !accordionArr[idx].active;

      this.setState({
        accordion: accordionArr,
      });
    });
  }
}
