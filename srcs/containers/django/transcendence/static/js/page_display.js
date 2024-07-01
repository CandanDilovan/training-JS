PageDisplay();

function RemoveLoginRegistration()
{
    if (document.getElementById('register') && document.getElementById('registration_container'))
    {
        document.getElementById('registration_container').remove();
        document.getElementById('register').remove();
    }

    if (document.getElementById('login') && document.getElementById('login_container'))
    {
        document.getElementById('login_container').remove();
        document.getElementById('login').remove();
    }
}

function DisplayCanvas(value)
{
    RemoveLoginRegistration();
    AddGameCanvas(value);
}

async function PageDisplay()
{
    console.log("Gros caca !");
    await AddRegistration();
    await AddLogin();

    let popup = document.createElement('script');
    // popup.setAttribute('type', "module");
    popup.setAttribute('src', '../static/js/popup_handler.js');
    document.getElementById("scripts").appendChild(popup);
}


function AddGameCanvas(value)
{
    document.getElementById('gamecanvas').innerHTML = value;

    let text_src = ['../static/js/pong/racket.js', '../static/js/pong/balle.js', '../static/js/pong/main.js'];
    let add_element = Array(3).fill().map(() => document.createElement('script'));
    for (let a = 0; a < 3; a++)
    {
        add_element[a].setAttribute('src', text_src[a]);
        document.getElementById('scripts').appendChild(add_element[a]);
        // document.querySelector('body').appendChild(add_element[a]);
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