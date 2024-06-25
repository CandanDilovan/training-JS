
let isregistered = 0;

PageDisplay();

function RemoveLoginRegistration()
{
    let removeLogin = document.getElementById('login');
    let removeRegistration = document.getElementById('register');

    removeRegistration.remove();
    removeLogin.remove();
}

//is registered à changer par un verif dans le backend
async function PageDisplay()
{
    if (isregistered == 1)
    {
        RemoveLoginRegistration();
        AddGameCanvas();
        isregistered = 2;
    }
    else if (isregistered == 0)
    {
        await AddRegistration();
        await AddLogin();

        let popup = document.createElement('script');
        popup.setAttribute('src', '../static/js/popup.js');
        document.getElementById("scripts").appendChild(popup);
    }
}


// optimiser l'inculsion des scripts
function AddGameCanvas()
{
    let gameCanvas = document.createElement('canvas');
    
    gameCanvas.setAttribute('id', 'canv');
    gameCanvas.setAttribute('height', '1080');
    gameCanvas.setAttribute('width', '2040');
    gameCanvas.setAttribute('style', 'border: 4px solid black');
    
    document.getElementById('gamecanvas').appendChild(gameCanvas);
    
    //code en dessous à changer

    
    let twixsrc = document.createElement('script');
    twixsrc.setAttribute('src', '../static/js/twix.js');
    document.getElementById("scripts").appendChild(twixsrc);
    
    let ballesrc = document.createElement('script');
    ballesrc.setAttribute('src', '../static/js/balle.js');
    document.getElementById("scripts").appendChild(ballesrc);

    let mainsrc = document.createElement('script');
    mainsrc.setAttribute('src', '../static/js/main.js');
    document.getElementById("scripts").appendChild(mainsrc);
}

async function AddRegistration()
{
    let divRegistration = document.createElement('div');
    
    divRegistration.setAttribute('id', 'registration_box');
    divRegistration.setAttribute('class', 'popupbox');

    try
    {
        const response = await fetch('registration_popup/');
        if (!response.ok)
            throw new TypeError("registration fail");
        divRegistration.innerHTML = await response.text();
        document.getElementById('registration_container').appendChild(divRegistration);
    }
    catch (error)
    {
        console.log(error);
    }
}

async function AddLogin()
{
    let divLogin = document.createElement('div');

    divLogin.setAttribute('id', 'login');
    divLogin.setAttribute('class', 'popupbox');

    try
    {
        const response = await fetch('login_popup/');
        if (!response.ok)
            throw new TypeError("login fail");
        divLogin.innerHTML = await response.text();
        document.getElementById('login_container').appendChild(divLogin);
    }
    catch(error)
    {
        console.log(error);
    }
}