import { Component } from '@/core';
import Adj from '~/images/adj.jpg';
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
              안녕하세요. <br>
              ${years}년차 Front-End 개발자 안동준입니다.<br>
              뛰어난 <strong>커뮤니케이션 능력</strong>,<br>
              <strong>사람을 이끄는 능력</strong>,<br>
              <strong>낯가림없는 성격</strong>은 타팀과의 <strong>협업에 최적화</strong> 되어있습니다.<br>
              Back-End와 Front-End 양쪽 모두 개발 경험이 있어 <br>
              Back-end팀과 협업 시에도<br>
              서로의 <strong>요구사항을 빠르게 캐치</strong>하여 <strong>문제를 빠르게 파악하고 해결</strong>해나가<br>
              프로젝트가 순조롭게 진행이 잘되었습니다.<br>
              즐거운 사내 분위기를 만드는데 한몫 하겠습니다.
            </div>
          </div>

          <div class="link">
            <a href="">
              <span class="logo github"></span>
            </a>
            <a href="">
              <span class="logo velog"></span>
            </a>
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

    const velog = document.querySelector('.velog');
    const img_velog = document.createElement('img');
    img_velog.src = Velog;
    velog.appendChild(img_velog);

    const github = document.querySelector('.github');
    const img_github = document.createElement('img');
    img_github.src = Github;
    github.appendChild(img_github);
  }
}
