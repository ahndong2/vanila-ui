import { Component } from '@/core';
import { Accordion } from '@/components';
export class AccordionPage extends Component {
  template() {
    return `
      <div>Basic Accordion</div>
      <div class="basic"></div>

    `;
  }

  afterRender() {
    const basic = document.querySelector('.basic');
    new Accordion(basic, {
      accordion: [
        {
          title: 'title1',
          content: `<h2>title1<h2><span>Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</span>`,
          active: true,
        },
        {
          title: 'title2',
          content: `<h2>title1<h2><span>Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna.</span>`,
        },
        {
          title: 'title3',
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
      headerStyle: ``,
      bodyStyle: ``,
    });
  }
}
