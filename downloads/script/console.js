function consoleName() {
    console.clear();
    console.log(
        String.raw`%c
        ██╗  ██╗██╗██████╗ ██╗    ██╗███████╗███╗   ██╗
        ██║ ██╔╝██║██╔══██╗██║    ██║██╔════╝████╗  ██║
        █████╔╝ ██║██║  ██║██║ █╗ ██║█████╗  ██╔██╗ ██║
        ██╔═██╗ ██║██║  ██║██║███╗██║██╔══╝  ██║╚██╗██║
        ██║  ██╗██║██████╔╝╚███╔███╔╝███████╗██║ ╚████║
        ╚═╝  ╚═╝╚═╝╚═════╝  ╚══╝╚══╝ ╚══════╝╚═╝  ╚═══╝
        `,
        "color: #6156f4;"
    );
}
consoleName();

function headerBar() {
    const body = document.getElementById('body-container');
    const bar = document.createElement('div');
    bar.classList.add('page-alert');
    bar.innerText = `Say no to the act that Japan wees and poops its damn RADIOACTIVE water to our OCEAN! ☠️☠️☠️`;
    body.insertBefore(bar, body.children[0]);
}

headerBar();
