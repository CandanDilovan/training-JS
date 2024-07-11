

let game_script_cache = fetch_scripts('scripts/', 'game_script');
let homepage_script_cache = fetch_scripts('scripts/', 'auth_script');
let logout_script_cache = fetch_scripts('scripts/', 'home_script');




async function fetch_scripts(url, class_name)
{
    let script_div = document.createElement('div');
    await fetching_html(url, script_div);
    let script_list = script_div.getElementsByClassName(class_name);
    return (script_list);
}



if (document.getElementById('canv'))
{
    load_script_form_fetch(game_script_cache);
    load_script_form_fetch(logout_script_cache);
}

if (!document.getElementById('canv'))
{
    load_script_form_fetch(homepage_script_cache);
}

async function load_script_form_fetch(cache)
{

    let list_script = await cache;
    for (let i = 0; i < list_script.length; i++)
    {
        const newScript = document.createElement('script');
        if(list_script[i].className)
            newScript.className = list_script[i].className;
        if (list_script[i].src)
            newScript.src = list_script[i].src;
        else
            newScript.innerHTML = list_script[i].innerHTML;
        document.body.appendChild(newScript);

    }
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

function delete_script_by_class_name(name)
{
    const list_script = document.getElementsByClassName(name);
    for (let i = list_script.length - 1; i >= 0; i--) {
        list_script[i].remove();
    }
}