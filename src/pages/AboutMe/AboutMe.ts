import { Component } from '@/core';
import Adj from '~/images/adj.jpg';
export class AboutMe extends Component {
  template() {
    const years = new Date().getFullYear() - 2015;
    return `
        <div class="panel">
          <div class="panel-content">
            <div class="user">
              <div class="user-img"></div>
              <div class="user-text">
                <p class="greet">안녕하세요.</p> <br>
                <p class="myself">${years}년차 Front-End 개발자 <strong>안동준</strong>입니다.</p>
                
                <div class="link">
                  <p>Contact</p>
                  <span class="link-item">010-6878-1648</span>
                  <span class="link-item">ahndongjun2@gmail.com</span>
                  <p>Channel</p>
                  <a class="link-item" href="https://github.com/ahndong2" target="_blank">https://github.com/ahndong2</a>
                  <a class="link-item" href="https://velog.io/@ahndong2" target="_blank">https://velog.io/@ahndong2</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header">
            <h2>Base Component</h2>
          </div>
          <div class="code">
            <xmp>
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
                  return '';
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
            }
            </xmp>
          </div>
        </div>
      `;
  }

  afterRender() {
    const user_photo = document.querySelector('.user .user-img');
    const img_user_photo = document.createElement('img');
    img_user_photo.src = Adj;
    user_photo.appendChild(img_user_photo);

    // const phone = document.querySelector('.phone');
    // const img_phone = document.createElement('img');
    // img_phone.src = Phone;
    // phone.appendChild(img_phone);

    // const email = document.querySelector('.email');
    // const img_email = document.createElement('img');
    // img_email.src = Email;
    // email.appendChild(img_email);

    // const velog = document.querySelector('.velog');
    // const img_velog = document.createElement('img');
    // img_velog.src = Velog;
    // velog.appendChild(img_velog);

    // const github = document.querySelector('.github');
    // const img_github = document.createElement('img');
    // img_github.src = Github;
    // github.appendChild(img_github);
  }
}
