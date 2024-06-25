
let isregistered = 0;

PageDisplay();

function RemoveLoginRegistration()
{
    let removeLogin = document.getElementById('login');
    let removeRegistration = document.getElementById('register');

    removeRegistration.remove();
    removeLogin.remove();
}

function PageDisplay()
{
    if (isregistered == 1)
    {
        RemoveLoginRegistration();
        AddGameCanvas();
        isregistered = 2;
    }
    else if (isregistered == 0)
    {
        AddRegistration();
        AddLogin();
        if ()
        {
            let popup = document.createElement('script');
            popup.setAttribute('src', '../static/js/popup.js');
            document.getElementById("scripts").appendChild(popup);
        }
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

function AddRegistration()
{
    let divRegistration = document.createElement('div');
    
    divRegistration.setAttribute('id', 'registration_box');
    divRegistration.setAttribute('class', 'popupbox');
    
    divRegistration.innerHTML = `
        <h1>INSCRIPTION</h1>
        <form id="registration">
            <label>
                <input class="popuptext" id="username" type="text" placeholder="" required=""></input>
                <span>Username</span>
                <br><br>
            </label>
            <label>
                    <input class="popuptext" id="mail" type="email" placeholder="" required=""></input>
                    <span>Email</span>
                    <br><br>
                </label>
            <label>
                <input class="popuptext" id="Password" type="password" placeholder="" required=""></input>
                <span>Password</span>
                <br><br>
            </label>
            <label>
                <input class="popuptext" id="RPassword" type="password" placeholder="" required=""></input>
                <span>Confirm Password</span>
                <br><br>
            </label>
            <label>
                <button class="close" id="Rclose">X</button>
                <button class="submit" type="submit" id="registersubmit">Register me</button>
            </label>
        </form>
        `;
    document.getElementById('registration_container').appendChild(divRegistration);
}


async function AddLogin()
{
    let divLogin = document.createElement('div');

    divLogin.setAttribute('id', 'login');
    divLogin.setAttribute('class', 'popupbox');

    const response = await fetch('login_popup/');
    divLogin.innerHTML = await response.text();
    document.getElementById('login_container').appendChild(divLogin);
}