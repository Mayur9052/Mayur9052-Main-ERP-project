let contact_body = document.getElementById('contact_body');
let contact_side = document.getElementById('contact_side');
let navbar_body = document.getElementById('nav_body');
let dark_text = document.getElementById('dark_text');

if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "false");
}

checkDarkMode()

function checkDarkMode(){
    if (localStorage.getItem('darkMode')==="true"){
        navbar_body.checked = false;                                       
        navbar_body.classList.add('nav_body_dark');
        dark.setAttribute('checked', '');
        dark_text.innerText = "Light";
        contact_body.classList.add('contact_main_dark');
        contact_side.classList.add('contact_side_dark');
    }else{
        navbar_body.checked = true;
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        contact_body.classList.remove('contact_main_dark');
        contact_side.classList.remove('contact_side_dark');
    }
}


function changeDarkMode(){
    if (localStorage.getItem('darkMode')==="false"){
        localStorage.setItem('darkMode', "true");
        navbar_body.classList.add('nav_body_dark');
        dark_text.innerText = "Light";
        contact_body.classList.add('contact_main_dark');
        contact_side.classList.add('contact_side_dark');       
    }else{
        localStorage.setItem('darkMode', "false");
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        contact_body.classList.remove('contact_main_dark');
        contact_side.classList.remove('contact_side_dark');
    }
}

