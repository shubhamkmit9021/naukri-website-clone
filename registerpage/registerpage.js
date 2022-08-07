document.getElementById("button").addEventListener("click", registerData);

var regArr = JSON.parse(localStorage.getItem("registerationDetails")) || [];

function registerData(){
    var name = document.getElementById("input1").value;
    var email = document.getElementById("input2").value;
    var password = document.getElementById("input3").value;
    var mob = document.getElementById("input4").value;

    regDataObj = {
        name : name,
        email : email,
        password : password,
        mob : mob
    }

    regArr.push(regDataObj);

    localStorage.setItem("registerationDetails", JSON.stringify(regArr));

    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
}




// Code for sign in page 
// just copy paste below code in sign in page

// document.getElementById("").addEventListener("click", signChk);
// var regArr = JSON.parse(localStorage.getItem("registerationDetails")) || [];
// function signChk(){
//     var email = document.getElementById("").value;
//     var password = document.getElementById("").value;
//     var flag = false;

//     regArr.map(function(elem){
//         if(elem.email == email && elem.password == password){
//             flag = true;
//             return;
//         }
//     })

//     if(flag){
//         alert("Login Successful !");

//         var h4 = document.createElement("h4");
//         h4.innerText = "Welcome Gaurav";
//         document.getElementById("").innerHTML = h4;

//         window.location.href = "";


//     }else{
//         alert("Please enter valid email and password !")
//     }
// }