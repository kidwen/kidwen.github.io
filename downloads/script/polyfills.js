const rewriteHistoryChangeStateFn = (type, callback) => {
    const prevHistoryFn = window.history[type];
    window.history[type] = (...args) => {
        const ret = prevHistoryFn.apply(window.history, args);
        callback();
        return ret;
    };
};

rewriteHistoryChangeStateFn("pushState", () => addJs());
window.addEventListener('popstate', () => addJs());
window.addEventListener("load", () => addJs());

const scripts = [];
let id = 0;

const addJs = () => {
    scripts.forEach(item => {
        item.remove();
    });
    if(window.location.href.includes('mermaid')) {
        createScript('/downloads/script/mermaid.js')
    }
}

const createScript = (src) => {
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    scripts.push(script)
    document.getElementsByTagName('body')[0].appendChild(script);
}
