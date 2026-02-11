function consoleName() {
    console.clear();
    console.log(
        String.raw`%c
  __   ___  _____  ______  ___       ___  _____     __      _  
 () ) / __)(_   _)(_  __ \(  (       )  )/ ___/    /  \    / ) 
 ( (_/ /     | |    ) ) \ \\  \  _  /  /( (__     / /\ \  / /  
 ()   (      | |   ( (   ) )\  \/ \/  /  ) __)    ) ) ) ) ) )  
 () /\ \     | |    ) )  ) ) )   _   (  ( (      ( ( ( ( ( (   
 ( (  \ \   _| |__ / /__/ /  \  ( )  /   \ \___  / /  \ \/ /   
 ()_)  \_\ /_____((______/    \_/ \_/     \____\(_/    \__/    
        `,
        "color: #6156f4;"
    );
}
consoleName();

function headerBar() {
    const body = document.getElementById('body-container');
    if (body.clientWidth < 712) return;
    const bar = document.createElement('div');
    bar.classList.add('page-alert');
    bar.innerText = `Say no to the act that Japan wees and poops its damn RADIOACTIVE water to our OCEAN! ☠️☠️☠️`;
    body.insertBefore(bar, body.children[0]);
}

headerBar();
