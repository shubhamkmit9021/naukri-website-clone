document.getElementById("searchBtn").addEventListener("click", searchFun);

function searchFun(){
    var skill = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var location = document.getElementById("location").value;
    window.location.replace("#");
}

document.getElementById("regBtn").addEventListener("click", regCandidate);

function regCandidate(){
    window.location.href = "";
}





// --------------------------------------Shubham's JS Starts Here------------------------------------

//  for navbar jobs hovering 

document.querySelector(".jobs").addEventListener("click", menuJobs);

// click
// click

function menuJobs() {

if(document.getElementById("mega_menu_table_jobs").style.display === "grid"){
    document.getElementById("mega_menu_table_jobs").style.display = "none"
}else{
    document.getElementById("mega_menu_table_jobs").style.display = "grid"

}
}


//  for navbar companies hovering 

document.querySelector(".companies").addEventListener("click",menuCompanies);

function menuCompanies() {

if(document.getElementById("mega_menu_table_companies").style.display === "grid"){
    document.getElementById("mega_menu_table_companies").style.display = "none"
}else{
    document.getElementById("mega_menu_table_companies").style.display = "grid"

}
}

//  for navbar services hovering 

document.querySelector(".services").addEventListener("click",menuServices);

function menuServices() {

if(document.getElementById("mega_menu_table_services").style.display === "grid"){
    document.getElementById("mega_menu_table_services").style.display = "none"
}else{
    document.getElementById("mega_menu_table_services").style.display = "grid"

}
}

//  for navbar resources hovering 

document.querySelector(".resources").addEventListener("click",menuResources);

function menuResources() {

if(document.getElementById("mega_menu_table_resources").style.display === "grid"){
    document.getElementById("mega_menu_table_resources").style.display = "none"
}else{
    document.getElementById("mega_menu_table_resources").style.display = "grid"

}
}

//  for navbar employees hovering 

document.querySelector(".employees").addEventListener("click",menuEmployees);

function menuEmployees() {

if(document.getElementById("mega_menu_table_employees").style.display === "grid"){
    document.getElementById("mega_menu_table_employees").style.display = "none"
}else{
    document.getElementById("mega_menu_table_employees").style.display = "grid"

}
}

// for showing login form

document.querySelector(".login").addEventListener("click",loginPage);

function loginPage() {

    document.getElementById("login_parent_div").style.display = "block"

// if(document.getElementById("login_parent_div").style.display === "block"){
//     document.getElementById("login_parent_div").style.display = "none"
// }else{
//     document.getElementById("login_parent_div").style.display = "block"

// }
}

document.querySelector("#close").addEventListener("click",closeLogin);

function closeLogin () {
    document.querySelector("#close").style.color="red";
    // document.getElementById("login_parent_div").style.color="red";
}



// for close login form

// document.querySelector(".fa-solid fa-xmark").addEventListener("click",closeLoginPage);

// function closeLoginPage() {

// if(document.getElementById("login_parent_div_close").style.display === "block"){
//     document.getElementById("login_parent_div_close").style.display = "none"
// }else{
//     document.getElementById("login_parent_div_close").style.display = "block"

// }
// }



// fa-solid fa-xmark

// for login form

// document.querySelector("#login_form").addEventListener("submit", loginForm);

// function loginForm() {

// }