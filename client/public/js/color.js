let navbar_body = document.getElementById('nav_body');
let nav_btn1 = document.getElementsByClassName('nav_btn1');
let nav_setting = document.getElementById('nav_setting');
let dark = document.getElementById('dark');
let dash_body = document.getElementById('dash_body_dark');
let dash_bills = document.getElementById('dash_bills');
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
        dash_body.classList.add('dash_body_dark');
        dash_bills.classList.add('dash_bills_dark');
        
    }else{
        navbar_body.checked = true;
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        dash_body.classList.remove('dash_body_dark');
        dash_bills.classList.remove('dash_bills_dark');
        acc_main.classList.remove('acc_main_dark');
    }
}


function changeDarkMode(){
    if (localStorage.getItem('darkMode')==="false"){
        localStorage.setItem('darkMode', "true");
        navbar_body.classList.add('nav_body_dark');
        dark_text.innerText = "Light";
        dash_body.classList.add('dash_body_dark');
        dash_bills.classList.add('dash_bills_dark');
        acc_main.classList.add('acc_main_dark');
        
    }else{
        localStorage.setItem('darkMode', "false");
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        dash_body.classList.remove('dash_body_dark');
        dash_bills.classList.remove('dash_bills_dark');
        acc_main.classList.remove('acc_main_dark');
    }
}

