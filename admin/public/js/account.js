let acc_main = document.getElementById('acc_main');
let acc_side = document.getElementById('acc_side')
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
        acc_main.classList.add('acc_main_dark');
        acc_side.classList.add('acc_main_dark_side')
        
    }else{
        navbar_body.checked = true;
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        acc_main.classList.remove('acc_main_dark');
        acc_side.classList.remove('acc_main_dark_side')
    }
}


function changeDarkMode(){
    if (localStorage.getItem('darkMode')==="false"){
        localStorage.setItem('darkMode', "true");
        navbar_body.classList.add('nav_body_dark');
        dark_text.innerText = "Light";
        acc_main.classList.add('acc_main_dark');
        acc_side.classList.add('acc_main_dark_side')
    }else{
        localStorage.setItem('darkMode', "false");
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        acc_main.classList.remove('acc_main_dark');
        acc_side.classList.remove('acc_main_dark_side')
    }
}

