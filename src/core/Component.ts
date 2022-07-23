import { $target } from '@types';

export class Component {
  $target: $target;
  $props: any;
  $state: any;

  constructor($target: $target, $props?: any) {
    this.$target = $target || document.querySelector('#app');
    this.$props = $props;
    // this.$state = $state;
    this.setup();
    this.setEvent();
    this.render();
    this.afterRender();
  }
  setup() {}
  template() {
    return ``;
  }
  render() {
    const template = this.template();
    if (typeof template === 'string') {
      this.$target.innerHTML = this.template();
    } else {
      this.$target.appendChild(template);
    }
  }
  afterRender() {}
  setEvent() {}
  setState(newState: any) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  addEvent(eventType: string, selector: string, callback: any) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target: Element) => children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event: any) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
