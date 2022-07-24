import { $target } from '@types';

export class Component {
  $target: $target;
  $props: any;
  $state: any;

  constructor($target: $target, $props?: any) {
    this.$target = $target || document.querySelector('#app');
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
    this.afterRender();
  }
  // init Setup
  setup() {}
  // Temlplate
  template() {
    return ``;
  }
  // Render HTML  String / CreateElement
  render() {
    const template = this.template();
    if (typeof template === 'string') {
      this.$target.innerHTML = this.template();
    } else {
      this.$target.appendChild(template);
    }
  }
  // Action after render HTML
  afterRender() {}
  // EventList Set
  setEvent() {}
  // Update State
  setState(newState: any) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  // Injecting events into the Target
  addEvent(eventType: string, selector: string, callback: any) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target: Element) => children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event: any) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
