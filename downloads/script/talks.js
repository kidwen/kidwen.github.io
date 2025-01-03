function loadTalksFn() {
    setTimeout(() => {
        if (window.qexot) {
            createScript('https://cdn.jsdelivr.net/npm/qexo-static@1.6.0/hexo/talks.js');
            setTimeout(() => {
                showQexoTalks("qexot", "https://qexo-psi-one.vercel.app", 15);
            }, 200);
        } else {
            loadTalksFn();
        }
    }, 100);
}
loadTalksFn();

