tl; dr
// div 대신 current-time처럼 적절한 이름의 태그를 사용할 수 있다
// html element와 javascript class를 한 몸으로 만들어 준다
// IE11 이상만 지원 Polyfill 필요할 수도 있다
// 긴 MutationObserver 코드는 굿바이

//사용법은 아래의 코드를 보는 것이 빠르겠다. 아래의 코드를 크롬이나 사파리에 올려보자. 이외의 브라우저에서는 아래의 브라우저 지원과 polfill섹션을 참조하자

<!DOCYPE html>
<html>
    <head>
        <script src="../src/CurrentTime.js"></script>
    </head>

    <body>
        <current-Time>
            {/* fallback value */} {/* 6/11/2017, 11:55:49 */}
        </current-Time>
    </body>
</html>


class CurrentTime extends HTMLElement {
    constructor() {
        // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
        super();
    }
    static get observedAttributes() {
        // 모니터링 할 속성 이름
        return ['locale'];
    }
    connectedCallback() {
        // DOM에 추가되었다. 렌더링 등의 처리를 하자.
        this.start();
    }
    disconnectedCallback() {
        // DOM에서 제거되었다. 엘리먼트를 정리하는 일을 하자.
        this.stop();
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        // 속성이 추가/제거/변경되었다.
        this[attrName] = newVal;
    }
    adoptedCallback(oldDoc, newDoc) {
        // 다른 Document에서 옮겨져 왔음
        // 자주 쓸 일은 없을 것.
    }
    start() {
        // 필요에 따라 메서드를 추가할 수 있다.
        // 이 클래스 인스턴스는 HTMLElement이다.
        // 따라서 `document.querySelector('current-time').start()`로 호출할 수 있다.
        this.stop();
        this._timer = window.setInterval(() => {
            this.innerText = new Date().toLocaleString(this.locale);
        }, 1000);
    }
    stop() {
        // 이 메서드 역시 CurrentTime클래스의 필요에 의해 추가했다.
        if (this._timer) {
            window.clearInterval(this._timer);
            this._timer = null;
        }
    }
}
// <current-time> 태그가 CurrentTime 클래스를 사용하도록 한다.
customElements.define('current-time', CurrentTime);



// 아래에는 참고로 비슷한 역할을 수행하도록 Custom Elements를 사용하지 않고 작성한 코드이다.

<!DOCTYPE html>
<html>
    <head>
        <script src="../src/CurrentTime.js"></script>
    </head>
    <body>
        <div class="current-time">
            <!-- fallback value -->
            6/11/2017, 11:55:49
        </div>
    </body>
</html>


class CurrentTime {
    constructor(el) {
        this._el = el;
        this._init();
        this.start();
    }
    _init() {
        // 속성 변경을 모니터
        this._localeChangedObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'locale') {
                    this.locale = this._el.getAttribute('locale');
                }
            });
        });
        this._localeChangedObserver.observe(this._el, {
            attributes: true,
            attributeFilter: ['locale']
        });
        // 엘리먼트가 DOM에서 제거되었는지 모니터
        this._disconnectedObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList' &&
                    Array.prototype.slice.call(mutation.removedNodes).indexOf(this._el) >= 0) {
                    this.dispose();
                }
            });
        });
        this._disconnectedObserver.observe(this._el.parentNode, {
            childList: true
        });
    }
    start() {
        this.stop();
        this._timer = window.setInterval(() => {
            this._el.innerText = new Date().toLocaleString(this.locale);
        }, 1000);
    }
    stop() {
        if (this._timer) {
            window.clearInterval(this._timer);
            this._timer = null;
        }
    }
    dispose() {
        this.stop();
        this._localeChangedObserver.disconnect();
        this._disconnectedObserver.disconnect();
    }
    static create(el) {
        return new CurrentTime(el);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.current-time').forEach(el => {
        CurrentTime.create(el);
    });
}, false);