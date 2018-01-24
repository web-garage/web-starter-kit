import pages from './pages';

const navigationMenu = () => {
  if (process.env.NODE_ENV !== 'production') {
    const style = document.createElement('style');
    style.innerHTML = `
      .zn-navigation {
        position: fixed;
        z-index: 1;
        bottom: 5vh;
        right: 5vh;
      }
      .zn-open {
        width: 50px;
        height: 50px;
        background: #fff;
        box-shadow: 0 3px 5px rgba(0, 0, 0, .04);
        border-radius: 6px;
        cursor: pointer;
        position: absolute;
        right: 0;
        bottom: 0;
        border: 2px solid #ffdb4d;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        visibility: visible;
        opacity: 1;
        transition: all .2s ease-in-out;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
      .zn-open.hidden {
        visibility: hidden;
        opacity: 0;
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0);
      }
      .zn-open:hover svg {
        fill: #263238;
      }
      .zn-open svg {
        width: 25px;
        height: 25px;
        fill: #cfd8dc;
        transition: fill .2s ease-in-out;
      }
      .zn-container {
        box-shadow: 0 3px 5px rgba(0, 0, 0, .04);
        background: #fff;
        border-radius: 6px;
        min-width: 250px;
        height: 400px;
        border: 2px solid #ffdb4d;
        visibility: hidden;
        opacity: 0;
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0);
        transition: all .2s ease-in-out;
      }
      .zn-container.visible {
        visibility: visible;
        opacity: 1;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
      }
      .zn-head {
        font-size: 16px;
        letter-spacing: .06em;
        white-space: nowrap;
        height: 50px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 15px;
      }
      .zn-list {
        height: 300px;
        overflow-y: auto;
        padding: 0 15px;
      }
      .zn-link {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid #eceff1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row nowrap;
        flex-flow: row nowrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #263238;
        white-space: nowrap;
        font-size: 14px;
        letter-spacing: .02em;
        transition: color .14s ease-in-out;
      }
      .zn-link:hover {
        color: #cfd8dc;
      }
      .zn-link:last-of-type {
        border: none;
      }
      .zn-sub {
          font-size: 10px;
        color: #cfd8dc;
      }
      .zn-close {
        width: 100%;
        height: 50px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        cursor: pointer;
      }
      .zn-close:hover svg {
        fill: #263238;
      }
      .zn-close svg {
        width: 20px;
        height: 20px;
        fill: #cfd8dc;
        transition: fill .2s ease-in-out;
      }
    `;

    const navigation = document.createElement('div');
    navigation.classList.add('zn-navigation');

    const container = document.createElement('div');
    container.classList.add('zn-container');

    const head = document.createElement('div');
    head.classList.add('zn-head');
    head.innerText = 'Navigation menu';

    const list = document.createElement('div');
    list.classList.add('zn-list');

    const close = document.createElement('div');
    close.classList.add('zn-close');
    close.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.968 511.968">
        <path d="M511.968 24.072l-10.992-11.584-244.992 232.48L10.992 12.488 0 24.072l244.368 231.904L0 487.88l10.992 11.6L255.984 267l244.992 232.48 10.992-11.6L267.6 255.976z"/>
      </svg>
    `;

    const open = document.createElement('div');
    open.classList.add('zn-open');
    open.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56">
        <path d="M22.66 0H3.34A3.343 3.343 0 0 0 0 3.34v19.32A3.343 3.343 0 0 0 3.34 26h19.32A3.343 3.343 0 0 0 26 22.66V3.34A3.343 3.343 0 0 0 22.66 0zM24 22.66c0 .739-.601 1.34-1.34 1.34H3.34C2.601 24 2 23.399 2 22.66V3.34C2 2.601 2.601 2 3.34 2h19.32c.739 0 1.34.601 1.34 1.34v19.32zM52.66 0H33.34A3.343 3.343 0 0 0 30 3.34v19.32A3.343 3.343 0 0 0 33.34 26h19.32A3.343 3.343 0 0 0 56 22.66V3.34A3.343 3.343 0 0 0 52.66 0zM54 22.66c0 .739-.601 1.34-1.34 1.34H33.34c-.739 0-1.34-.601-1.34-1.34V3.34c0-.739.601-1.34 1.34-1.34h19.32c.739 0 1.34.601 1.34 1.34v19.32zM22.66 30H3.34A3.343 3.343 0 0 0 0 33.34v19.32A3.343 3.343 0 0 0 3.34 56h19.32A3.343 3.343 0 0 0 26 52.66V33.34A3.343 3.343 0 0 0 22.66 30zM24 52.66c0 .739-.601 1.34-1.34 1.34H3.34C2.601 54 2 53.399 2 52.66V33.34c0-.739.601-1.34 1.34-1.34h19.32c.739 0 1.34.601 1.34 1.34v19.32zM55 42H44V31a1 1 0 1 0-2 0v11H31a1 1 0 1 0 0 2h11v11a1 1 0 1 0 2 0V44h11a1 1 0 1 0 0-2z"/>
    </svg>
    `;

    open.addEventListener('click', (event) => {
      const _this = event.currentTarget;
      _this.classList.add('hidden');
      container.classList.add('visible');
    });

    close.addEventListener('click', () => {
      container.classList.remove('visible');
      open.classList.remove('hidden');
    });

    document.head.appendChild(style);
    navigation.appendChild(container);
    navigation.appendChild(open);
    container.appendChild(head);
    container.appendChild(list);
    container.appendChild(close);

    for (let i = 0; i < pages.length; i++) {
      const element = pages[i];
      const arr = element.split('.');
      const link = document.createElement('a');
      const sub = document.createElement('span');
      const name = arr[0];
      const type = arr[1];
      link.classList.add('zn-link');
      sub.classList.add('zn-sub');
      link.innerHTML = name;
      sub.innerHTML = type;
      link.setAttribute('href', `${arr[0]}.${arr[1]}`);
      list.appendChild(link);
      link.appendChild(sub);
    }

    document.body.appendChild(navigation);
  }
};

export { navigationMenu };
