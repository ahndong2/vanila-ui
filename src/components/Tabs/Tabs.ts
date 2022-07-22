import { Component } from '@/core';
import { TabData } from '@types';
export class Tabs extends Component {
  setup() {
    this.$state = this.$props;
  }
  template() {
    const { activeTab, tabData } = this.$state;
    return `
    <div class="tabs" data-activeTab=${activeTab}>
      <div class="tabs__list">
        ${tabData
          .map((v: TabData) => {
            return `
          <div class="tab" data-value=${v.value}>
            <button class="tabs__link">${v.title}</button>
          </div>
          `;
          })
          .join(' ')}
      </div>
      
      <div class="tab_panel">
          <div class="tab_panel_item">
            ${tabData.find((t: TabData) => t.value === activeTab).content}
          </div>
      </div>
    </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '.tab', (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLElement;
      const value = (target.closest('.tab') as HTMLDivElement).dataset['value'];

      const tabs = JSON.parse(JSON.stringify(this.$state));
      tabs.activeTab = value;

      this.setState({
        ...tabs,
      });
    });
  }
}
