import { Component } from '@/core';
import { TabData } from '@types';
export class Tabs extends Component {
  setup() {
    const { activeTab, tabData } = this.$props;
    this.$state = { activeTab, tabData };
  }
  template() {
    const { activeTab, tabData } = this.$state;
    return `
    <div class="tab" data-activeTab=${activeTab}>
      <div class="tab-nav">
        ${tabData
          .map((v: TabData) => {
            return `
            <button type="button" class="tab-item ${
              v.value === activeTab ? 'active' : ''
            }" data-value=${v.value}>${v.title}</button>
          `;
          })
          .join(' ')}
      </div>
      
      <div class="tab-content">
            ${tabData.find((t: TabData) => t.value === activeTab).content}
      </div>
    </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '.tab-item', (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      const value = (target.closest('.tab-item') as HTMLDivElement).dataset['value'];

      const tabs = JSON.parse(JSON.stringify(this.$state));
      tabs.activeTab = value;

      this.setState({
        ...tabs,
      });
    });
  }
}
