import { Component } from '@/core';
import { $target } from '@types';
export class VirtualList extends Component {
  setup() {
    const props = this.$props;

    const width: string = `${props.width}px` || '100%';
    const height: string = `${props.height}px` || '100%';
    const itemHeight: number = props.itemHeight || 30;
    const totalRows: number = props.totalRows || (props.items && props.items.length);
    const screenItemsLen: number = Math.ceil(props.height / itemHeight);
    const cachedItemsLen: number = screenItemsLen * 3;
    this.$state = {
      ...this.$props,
      width: width,
      height: height,
      itemHeight: itemHeight,
      items: props.items,
      renderRow: props.renderRow,
      totalRows: totalRows,
      totalHeight: props.itemHeight * totalRows,
      lastRepaintY: 0,
      maxBuffer: screenItemsLen * itemHeight,
      screenItemsLen: screenItemsLen,
      cachedItemsLen: cachedItemsLen,
    };
  }
  template() {
    this.$state.container = this.createContainer();
    return this.$state.container;
  }

  afterRender() {
    this.$state.scroller = this.createScroller();

    this.renderChunk(this.$state.container, 0, this.$state.cachedItemsLen / 2);
    this.$state.container.addEventListener('scroll', this.onScroll.bind(this));
  }
  onScroll(e: Event) {
    const target = e.target as HTMLAnchorElement;
    const scrollTop = target.scrollTop;
    let first = parseInt(String(scrollTop / this.$state.itemHeight)) - this.$state.screenItemsLen;
    first = first < 0 ? 0 : first;
    if (
      !this.$state.lastRepaintY ||
      Math.abs(scrollTop - this.$state.lastRepaintY) > this.$state.maxBuffer
    ) {
      this.renderChunk(this.$state.container, first, this.$state.cachedItemsLen);
      this.$state.lastRepaintY = scrollTop;
      // this.setState({
      //   ...this.$state,
      //   lastRepaintY: scrollTop,
      // });
    }
  }
  renderChunk(node: $target, fromPos: number, howMany: number) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(this.$state.scroller);
    let finalItem = fromPos + howMany;
    if (finalItem > this.$state.totalRows) finalItem = this.$state.totalRows;
    for (let i = fromPos; i < finalItem; i++) {
      let item;
      if (this.$state.renderRow) item = this.$state.renderRow(i);
      else {
        if (typeof this.$state.items[i] === 'string') {
          const itemText = document.createTextNode(this.$state.items[i]);
          item = document.createElement('div');
          item.style.height = this.$state.height;
          item.appendChild(itemText);
        } else {
          item = this.$state.items[i];
        }
      }

      item.classList.add('vrow');
      item.style.position = 'absolute';
      item.style.top = i * this.$state.itemHeight + 'px';
      fragment.appendChild(item);
    }

    node.innerHTML = '';
    node.appendChild(fragment);
  }
  createContainer() {
    const state = this.$state;
    const c = document.createElement('div');
    c.classList.add('container');
    c.style.width = `${state.width}`;
    c.style.height = `${state.height}`;
    c.style.marginLeft = state.marginLeft || 'auto';
    c.style.marginRight = state.marginRight || 'auto';
    c.style.overflowX = state.overflowX || '';
    c.style.overflowY = state.overflowY || 'scroll';
    c.style.position = state.position || 'relative';
    c.style.padding = state.padding || '0';
    c.style.border = state.border || '1px solid black';
    return c;
  }
  createScroller() {
    const s = document.createElement('div');
    s.classList.add('scroller');
    s.style.opacity = '0';
    s.style.position = 'absolute';
    s.style.top = '0';
    s.style.left = '0';
    s.style.width = '1px';
    s.style.height = this.$state.totalHeight + 'px';
    return s;
  }
}
