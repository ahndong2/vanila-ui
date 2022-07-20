import { Component } from '@/core';

export class Accordion extends Component {
  template() {
    return `
      <section id="accordion">
      <div class="menu">
          <div class="header">
              <div class="title">Title 1</div>
              <span class="icon">+</span>
          </div>
          <div class="content">
              Content 1
          </div>
      </div>

      <div class="menu">
          <div class="header">
              <div class="title">Title 2</div>
              <span class="icon">+</span>
          </div>
          <div class="content">
              Content 2
          </div>
      </div>

      <div class="menu">
          <div class="header">
              <div class="title">Title 3</div>
              <span class="icon">+</span>
          </div>
          <div class="content">
              Content 3
          </div>
      </div>
    </section>
    `;
  }

  setEvent() {}
}
