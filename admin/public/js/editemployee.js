let edit_employee = document.getElementById('edit_employee');
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
        edit_employee.classList.add('edit_employee_dark');
    }else{
        navbar_body.checked = true;
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        edit_employee.classList.remove('edit_employee_dark');
    }
}


function changeDarkMode(){
    if (localStorage.getItem('darkMode')==="false"){
        localStorage.setItem('darkMode', "true");
        navbar_body.classList.add('nav_body_dark');
        dark_text.innerText = "Light";
        edit_employee.classList.add('edit_employee_dark');
    }else{
        localStorage.setItem('darkMode', "false");
        navbar_body.classList.remove('nav_body_dark');
        dark_text.innerText = "Dark";
        edit_employee.classList.remove('edit_employee_dark');
    }
}

