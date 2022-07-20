import { $target, $state } from '@types';

export class Component {
  $target: $target;
  $props: any;
  $state: $state;

  constructor($target: $target, $props?: any) {
    this.$target = $target || document.querySelector('#app');
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }
  setup() {}
  mounted() {}
  template() {
    return ``;
  }
  render() {
    console.log('this.$target : ', this.$target);
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {}
  setState(newState: $state) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  addEvent(eventType: Event, selector: string, callback: (e: Event) => {}) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target: Element) => children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event: any) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
