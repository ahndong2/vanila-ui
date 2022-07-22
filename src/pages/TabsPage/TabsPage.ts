import { Tabs } from '@/components';
import { Component } from '@/core';
export class TabsPage extends Component {
  template() {
    return `
      <div>Basic Tabs Use Options</div>
      <div class="component"></div>
    `;
  }

  afterRender() {
    const target = document.querySelector('.component');
    new Tabs(target, {
      activeTab: 'tab_1',
      tabData: [
        {
          title: 'title1',
          value: 'tab_1',
          content: `<h2>title1<h2><span>Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</span>`,
        },
        {
          title: 'title2',
          value: 'tab_2',
          content: `<h2>title2<h2><span>Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna.</span>`,
        },
        {
          title: 'title3',
          value: 'tab_3',
          content: `<h2>title3<h2><p>
          Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
          Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
          ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
          lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
          </p>
          <ul>
            <li>List item one</li>
            <li>List item two</li>
            <li>List item three</li>
          </ul>`,
        },
      ],
    });
  }
}
