let leave_body = document.getElementById('leave_body');
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
        leave_body.classList.add('leave_main_dark');
    }else{
        navbar_body.checked = true;
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        leave_body.classList.remove('leave_main_dark');
    }
}


function changeDarkMode(){
    if (localStorage.getItem('darkMode')==="false"){
        localStorage.setItem('darkMode', "true");
        navbar_body.classList.add('nav_body_dark');
         dark_text.innerText = "Light";
        leave_body.classList.add('leave_main_dark');
    }else{
        localStorage.setItem('darkMode', "false");
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        leave_body.classList.remove('leave_main_dark');
    }
}

