import { Component } from '@/core';
import Adj from '~/images/adj.jpg';
import Phone from '~/images/smartphone.png';
import Email from '~/images/email.png';
import Velog from '~/images/velog.png';
import Github from '~/images/github.png';
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
