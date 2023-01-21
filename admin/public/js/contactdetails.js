let contact_details = document.getElementById('contact_details');
let navbar_body = document.getElementById('nav_body');


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
        contact_details.classList.add('contact_details_dark');
    }else{
        navbar_body.checked = true;
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        contact_details.classList.remove('contact_details_dark');
    }
}


function changeDarkMode(){
    if (localStorage.getItem('darkMode')==="false"){
        localStorage.setItem('darkMode', "true");
        navbar_body.classList.add('nav_body_dark');
        dark_text.innerText = "Light";
        contact_details.classList.add('contact_details_dark');
    }else{
        localStorage.setItem('darkMode', "false");
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        contact_details.classList.remove('contact_details_dark');
    }
}

