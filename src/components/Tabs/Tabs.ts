export class Tabs extends HTMLElement {
  constructor() {
    super();
    // 요소 생성
  }

  connectedCallback() {
    // 이 사용자 정의 요소가 문서에 추가될 때, 브라우저가 이 콜백을 호출합니다.
    // (요소를 반복적으로 추가/삭제할 경우 여러 번 호출할 수 있습니다.)
  }

  disconnectedCallback() {
    // 이 사용자 정의 요소가 문서에서 삭제될 때, 브라우저가 이 콜백을 호출합니다.
    // (요소를 반복적으로 추가/삭제할 경우 여러 번 호출할 수 있습니다.)
  }

  static get observedAttributes() {
    return [
      /* 관찰하고자 하는 attribute의 이름을 요소로 하는 배열이 return 되어야 합니다. */
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // 위에서 return된 이 사용자 정의 요소의 attribute 중 하나가 변경될 때마다 호출됩니다.
  }

  adoptedCallback() {
    // 사용자 정의 요소가 새로운 document로 이동되었을 때마다 호출됩니다.
    // (document.adoptNode에서 발생, 거의 사용되지 않음)
  }

  // 다른 요소 메서드와 속성이 있을 수 있습니다.
}
