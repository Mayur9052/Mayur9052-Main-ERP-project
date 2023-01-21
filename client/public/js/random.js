let bill1 = document.getElementById('bill1');
let bill2 = document.getElementById('bill2');
let bill3 = document.getElementById('bill3');
let bill4 = document.getElementById('bill4');
let per1 = document.getElementById('per1');
let per2 = document.getElementById('per2');
let per3 = document.getElementById('per3');
let per4 = document.getElementById('per4');
let pro_loss1 = document.getElementById("pro_loss1");
let pro_loss2 = document.getElementById("pro_loss2");
let pro_loss3 = document.getElementById("pro_loss3");


let h1 = pro_loss1;
let h2 = pro_loss2;

bill1.innerHTML = ((Math.floor(Math.random() * 9999999) + 1000000)).toLocaleString('en-IN');

bill2.innerHTML = ((Math.floor(Math.random() * 9999999) + 1000000)).toLocaleString('en-IN');

bill3.innerHTML = ((Math.floor(Math.random() * 9999999) + 1000000)).toLocaleString('en-IN');

bill4.innerHTML = ((Math.floor(Math.random() * 9999999) + 1000000)).toLocaleString('en-IN');

per1.innerHTML = (Math.floor(Math.random() * 59) + 11) + "." + (Math.floor(Math.random() * 99) + 11) + "%";

per2.innerHTML = (Math.floor(Math.random() * 59) + 11) + "." + (Math.floor(Math.random() * 99) + 11) + "%"; 

per3.innerHTML = (Math.floor(Math.random() * -59)) + "." + (Math.floor(Math.random() * 99) + 11) + "%"; 

per4.innerHTML = (Math.floor(Math.random() * 59) + 11) + "." + (Math.floor(Math.random() * 99) + 11) + "%"; 

pro_loss1.innerHTML = ((Math.floor(Math.random() * 9999999) + 1000000));

pro_loss2.innerHTML = ((Math.floor(Math.random() * -9999999) + 1000000));

pro_loss3.innerHTML = (Number(h1.innerHTML) + Number(h2.innerHTML)).toLocaleString('en-IN');


