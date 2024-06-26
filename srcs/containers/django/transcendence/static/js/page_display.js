
let isregistered = 0;

PageDisplay();

function RemoveLoginRegistration()
{
    if (document.getElementById('register'))
    {
        let removeRegistration = document.getElementById('register');
        removeRegistration.remove();
    }

    if (document.getElementById('login'))
    {
        let removeLogin = document.getElementById('login');
        removeLogin.remove();
    }
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
        popup.setAttribute('src', '../static/js/popup_handler.js');
        document.getElementById("scripts").appendChild(popup);
    }
}


function AddGameCanvas()
{
    let gameCanvas = document.createElement('canvas');
    
    gameCanvas.setAttribute('id', 'canv');
    gameCanvas.setAttribute('height', '1080');
    gameCanvas.setAttribute('width', '2040');
    gameCanvas.setAttribute('style', 'border: 4px solid black');
    
    document.getElementById('gamecanvas').appendChild(gameCanvas);

    let text_src = ['../static/js/racket.js', '../static/js/balle.js', '../static/js/main.js'];
    let add_element = Array(3).fill().map(() => document.createElement('script'));
    for (let a = 0; a < 3; a++)
    {
        add_element[a].setAttribute('src', text_src[a]);
        document.getElementById("scripts").appendChild(add_element[a]);
    }
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