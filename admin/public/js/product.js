let pro_main = document.getElementById('pro_main');
let pro_side = document.getElementById('pro_side')
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
        pro_main.classList.add('pro_main_dark');
        pro_side.classList.add('pro_main_dark_side')
        
    }else{
        navbar_body.checked = true;
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        pro_main.classList.remove('pro_main_dark');
        pro_side.classList.remove('pro_main_dark_side')
    }
}


function changeDarkMode(){
    if (localStorage.getItem('darkMode')==="false"){
        localStorage.setItem('darkMode', "true");
        navbar_body.classList.add('nav_body_dark');
        dark_text.innerText = "Light";
        pro_main.classList.add('pro_main_dark');
        pro_side.classList.add('pro_main_dark_side')
    }else{
        localStorage.setItem('darkMode', "false");
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        pro_main.classList.remove('pro_main_dark');
        pro_side.classList.remove('pro_main_dark_side')
    }
}

