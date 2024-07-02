
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

function DisplayCanvas()
{
    RemoveLoginRegistration();
    AddGameCanvas();
}

function delete_scripts()
{
    game_scripts = document.getElementById('game_scripts');

    if (game_scripts)
    {
        while (game_script.firstChild)
        {
            game_scripts.removeChild(game_scripts.firstChild);
        }
    }

    scripts = document.getElementById('scripts');
    scripts.removeChild(scripts.firstChild);
}

async function PageDisplay()
{
    await AddRegistration();
    await AddLogin();

    let popup = document.createElement('script');
    popup.setAttribute('src', '../static/js/popup_handler.js');
    document.getElementById("scripts").appendChild(popup);
}

async function fetching_html(url, element)
{
    try
    {
        const response = await fetch(url);
        if (!response.ok)
            throw new TypeError("HTML fetch failed");
        element.innerHTML = await response.text();
    }
    catch (error)
    {
        console.log(error);
    }
}

async function AddGameCanvas()
{

    let div_content = document.getElementById('content');
    await fetching_html('game/', div_content);

    const scripts = div_content.getElementsByTagName('script');

    // Permet de recup les script dans le html fetch et de les append a la page pour les load
    for (let i = 0; i < scripts.length; i++) {
        const newScript = document.createElement('script');
        if (scripts[i].src) {
            newScript.src = scripts[i].src;
        } else {
            newScript.innerHTML = scripts[i].innerHTML;
        }
        document.body.appendChild(newScript);
    }

    // Supprime les elements script qui ont ete fetch qui sont donc inutile,
    // Faut les del dans le sens inverse parce que sinon tu perd le file dans la liste trop tard pour expliquer comprendra qui pourra
    for (let i = scripts.length - 1; i >= 0; i--) {
        scripts[i].remove();
    }
    document.getElementById('scripts').remove();
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