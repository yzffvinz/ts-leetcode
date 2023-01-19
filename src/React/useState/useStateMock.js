let renderer = null;
let cursor = 0;
const states = [];
const setters = [];

function useState(initialValue) {
    let setter = setters[cursor];
    if (cursor >= states.length) {
        states.push(initialValue);
        const cursorForSetter = cursor;
        setter = nextState => {
            if (states[cursorForSetter] !== nextState) {
                states[cursorForSetter] = nextState;
                renderer && renderer();
            }
        };
        setters.push(setter);
    }

    const state = states[cursor++];
    return [state, setter];
}

function mount(container = document.body, dom) {
    let root = document.querySelector('#root');
    if (!root) {
        root = document.createElement('div');
        root.id = 'root';
    }
    container.appendChild(root);

    root.innerHTML = '';
    root.appendChild(dom);
}

function render(factory) {
    if (!renderer) {
        renderer = () => {
            cursor = 0;
            const dom = factory();
            mount(document.body, dom);
        };
    }
    renderer();
}