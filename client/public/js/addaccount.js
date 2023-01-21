let add_account = document.getElementById('add_account');
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
        add_account.classList.add('add_account_dark');
    }else{
        navbar_body.checked = true;
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        add_account.classList.remove('add_account_dark');
    }
}


function changeDarkMode(){
    if (localStorage.getItem('darkMode')==="false"){
        localStorage.setItem('darkMode', "true");
        navbar_body.classList.add('nav_body_dark');
        dark_text.innerText = "Light";
        add_account.classList.add('add_account_dark');
    }else{
        localStorage.setItem('darkMode', "false");
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        add_account.classList.remove('add_account_dark');
    }
}

