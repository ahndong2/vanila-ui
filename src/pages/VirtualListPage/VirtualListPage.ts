import { Component } from '@/core';
import { VirtualList } from '@/components';
export class VirtualListPage extends Component {
  template() {
    return `
      <div class="panel">
        <div class="panel-header">
          <h2>Virtual List</h2>
        </div>
        <div class="panel-content">
          <div class="component"></div>
        </div>
        <div class="code">
          <xmp>
            import { VirtualList } from '@/components';
            
            afterRender() {
              const target = document.querySelector('.component');
              new VirtualList(target, {
                width: 300,
                height: 300,
                itemHeight: 30,
                totalRows: 300,
                renderRow: function (row: number) {
                  const el = document.createElement('div');
                  el.innerHTML = 'Row Number ' + row;
                  el.style.border = '1px solid black';
                  el.style.textAlign = 'center';
                  el.style.width = '280px';
                  return el;
                },
              });
            }
          </xmp>
        </div>
      </div>
    `;
  }

  afterRender() {
    const target = document.querySelector('.component');
    new VirtualList(target, {
      width: 300,
      height: 300,
      itemHeight: 30,
      totalRows: 300,
      renderRow: function (row: number) {
        const el = document.createElement('div');
        el.innerHTML = 'Row Number ' + row;
        el.style.border = '1px solid black';
        el.style.textAlign = 'center';
        el.style.width = '280px';
        return el;
      },
    });
  }
}
