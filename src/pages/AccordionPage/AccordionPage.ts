import { Component } from '@/core';
import { Accordion } from '@/components';
export class AccordionPage extends Component {
  template() {
    return `
      <div class="panel">
        <div class="panel-header">
          <h2>Accordion</h2>
        </div>
        <div class="panel-content">
          <div class="component"></div>
        </div>
        <div class="code">
          import { Accordion } from '@/components';

          afterRender() {
            const basic = document.querySelector('.component');
            new Accordion(basic, {
              accordion: [
                {
                  title: 'title1',
                  content: '...',
                  active: true,
                },
                {
                  title: 'title2',
                  content: '...',
                },
                {
                  title: 'title3',
                  content: '...',
                },
              ],
              headerStyle: '',
              bodyStyle: '',
            });
          }
        </div>
      </div>
    `;
  }

  afterRender() {
    const basic = document.querySelector('.component');
    new Accordion(basic, {
      accordion: [
        {
          title: 'title1',
          content: `<span>
                      Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. 
                      Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. 
                      Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. 
                      Vestibulum a velit eu ante scelerisque vulputate.
                    </span>`,
          active: true,
        },
        {
          title: 'title2',
          content: `<span>
                      Sed non urna. Donec et ante. Phasellus eu ligula. 
                      Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, 
                      faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna.
                    </span>`,
        },
        {
          title: 'title3',
          content: `<p>
                      Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis.
                      Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero
                      ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis
                      lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui.
                    </p>`,
        },
      ],
      headerStyle: ``,
      bodyStyle: ``,
    });
  }
}
