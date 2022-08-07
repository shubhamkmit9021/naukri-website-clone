

document.getElementById("searchBtn").addEventListener("click", searchFun);

function searchFun(){
    var skill = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var location = document.getElementById("location").value;

    // var filteredArr = objArr.filter(function(elem){
    //     return (skill == elem.skill || experience == elem.exp || location == elem.loc);
    // })

    // localStorage.setItem("searchListArr", JSON.stringify(filteredArr));

    localStorage.setItem("skill", skill);
    localStorage.setItem("exp", experience);
    localStorage.setItem("loc", location);

    window.location.href = "searchlist.html";
}

document.getElementById("regBtn").addEventListener("click", regCandidate);

function regCandidate(){
    window.location.href = "";
}


//  for view all companies page 

document.getElementById("viewAllCompanies").addEventListener("click",changeWindow);

function changeWindow() {
    window.location.href="./company/company.html";
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

    // document.getElementById("login_parent_div").style.display = "block"

if(document.getElementById("login_parent_div").style.display === "block")
{
    document.getElementById("login_parent_div").style.display = "none"
}
else
{
    document.getElementById("login_parent_div").style.display = "block"
}
}


// Login JS-----------------------------
// Code for sign in page 

document.querySelector("form").addEventListener("submit", signChk);
var regArr = JSON.parse(localStorage.getItem("registerationDetails")) || [];

function signChk(){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var flag = false;

    regArr.map(function(elem){
        if(elem.email == email && elem.password == password){
            flag = true;
            return;
        }
    })

    if(flag){
        alert("Login Successful !");

        var h4 = document.createElement("h4");
        h4.innerText = "Welcome";

        // document.getElementById("").innerHTML = h4;

        // window.location.href = "";

        document.querySelector(".login").innerHTML = "Welcome to";
        document.querySelector(".register").innerHTML = "Naukri.com";

    }else{
        alert("Please enter valid email and password !")
    }
}








// document.querySelector("#for_close_page").addEventListener("click",closeLogin);

// function closeLogin () {
//     document.getElementById("login_parent_div").style.display = "none";
// }



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