let software_body = document.getElementById('software_body');
let software_child = document.getElementById('software_child');
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
        dark_text.innerText = "Light";
        dark.setAttribute('checked', '');
        software_body.classList.add('software_dark');
        software_child.classList.add('software_child');
    }else{
        navbar_body.checked = true;
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        software_body.classList.remove('software_dark');
        software_child.classList.remove('software_child');       
    }
}


function changeDarkMode(){
    if (localStorage.getItem('darkMode')==="false"){
        localStorage.setItem('darkMode', "true");
        navbar_body.classList.add('nav_body_dark');
        dark_text.innerText = "Light";
        software_body.classList.add('software_dark');
        software_child.classList.add('software_child');
    }else{
        localStorage.setItem('darkMode', "false");
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        software_body.classList.remove('software_dark');
        software_child.classList.remove('software_child');
    }
}

