import { Component } from '@/core';
import { LabelValue } from '@types';
export class Tabs extends Component {
  template() {
    const { activeTab, tabList } = this.$state.tabs;
    return `
    <div class="tabs">
      <div class="tabs__list">
        ${tabList
          .map((v: LabelValue) => {
            return `
          <div class="tab tab_${v.value}">
            <button class="tabs__link">${v.label}</button>
          </div>
          `;
          })
          .join(' ')}
      </div>
      
      <div id="tab_1" class="tab_panel">
        <p>A system to help you move from configuration management to application management across your hybrid cloud estate - through sharable, reusable, tiny applications called Charmed Operators.</p>
      </div>

      <div id="tab_2" class="tab_panel">
        <p>A set of tools to help you write Charmed Operators and to package them as Charms.</p>
      </div>

      <div id="tab_3" class="tab_panel">
        <p>A repository for charms - from Observability to Data to Identity and more.</p>
      </div>
    </div>
    `;
  }

  setEvent() {
    this.addEvent('click', '.tab', (e: Event) => {
      const target = e.target as HTMLElement;
      const idx = Number(target.classList[1].split('_')[1]);
      const tabs = JSON.parse(JSON.stringify(this.$state.tabs));
      tabs[idx].activeTab = idx;

      this.setState({
        tabs: tabs,
      });
    });
  }
}
