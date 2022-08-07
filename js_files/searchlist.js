
var objArr = [
    {
        post : "Fullstack Developer",
        company : "ZOLOSTAYS",
        exp : "1 year",
        salary : " 5,00,000 - 10,00,000 P.A.",
        loc : "Banglore",
        skill : "Java",
        details : "Vacancy Full stack Developer Candidates serving more than 1 month notice period can apply",
        linkofpage : "./job_Description/zolostays.html"
    },
    {
        post : "Backend Developer",
        company : "Amazon",
        exp : "3 years",
        salary : " 8,00,000 - 15,00,000 P.A.",
        loc : "Mumbai",
        skill : "Java . SQL . Automation",
        details : "Vacancy Backend Developer Candidates serving more than 1 week notice period can apply",
        linkofpage : "./job_Description/amazon.html"
    },
    {
        post : "Frontend Developer",
        company : "TCS",
        exp : "Fresher",
        salary : " 3,00,000 - 5,00,000 P.A.",
        loc : "Pune",
        skill : "Automation",
        details : "Vacancy Frontend Developer Candidates serving more than 1 week notice period can apply",
        linkofpage : "./job_Description/tcs.html"
    },

    {
        post : "Associate Software Engineer",
        company : "Precisely",
        exp : "4 years",
        salary : " Not disclosed",
        loc : "Noida",
        skill : "Front end . Linux . Javascript",
        details : "Bachelor s degree in Computer Science or related field, or equivalent experience.",
        linkofpage : "./job_Description/precisely.html"
    },

    {
        post : "Functional Test Planning Quality Engineer (Tester)",
        company : "Accenture",
        exp : "2 years",
        salary : " 3,00,000 - 5,00,000 P.A.",
        loc : "Pune",
        skill : "Automation . Consulting . Test execution . Agile methodology",
        details : "Additional Information : Resource need to work in ME shift viz 11 am to 8 pm Technical",
        linkofpage : "./job_Description/accenture.html"
    },

    {
        post : "Lead Full-Stack Developer",
        company : "BNY Mellon",
        exp : "6 years",
        salary : " Not disclosed",
        loc : "Pune",
        skill : "Computer science . Manager Quality Assurance . Front end . Coding",
        details : "Bachelors degree in computer science engineering or a related discipline, or equivalent",
        linkofpage : "https://www.naukri.com"
    },

   

    {
        post : "Catia Product Design Engineer",
        company : "Peoplefy Infosolutions Pvt. Ltd.",
        exp : "Fresher",
        salary : " Not disclosed",
        loc : "Delhi",
        skill : "presentation . PFMEA . Communication . DFMEA . GD&T . CATIA",
        details : "Taking up ownership and accountability to drive the project with minimum supervision",
        linkofpage : "https://www.naukri.com"
    },

    {
        post : "Software Quality Assurance Engineer",
        company : "Nuance India",
        exp : "Fresher",
        salary : " 3,00,000 - 5,00,000 P.A.",
        loc : "Pune",
        skill : "Cloud Native testing . REST API . Core Java . Git . Containerization",
        details : "This individual will join the Digital product QA team in Enterprise R&D. This team owns",
        linkofpage : "https://www.naukri.com"
    },
    

]

localStorage.setItem("masterJobList", JSON.stringify(objArr));
var objArr = JSON.parse(localStorage.getItem("masterJobList")) || [];

// Registered jobs by employer comes here

var jobsPosted = JSON.parse(localStorage.getItem("registerJob")) || [];


    jobsPosted.map(function(elem){
        objArr.unshift(elem);
    })

var chk = [];
localStorage.setItem("registerJob", JSON.stringify(chk));
// Registered jobs by employer comes here

var skill = localStorage.getItem("skill");
var exp = localStorage.getItem("exp");
var loc = localStorage.getItem("loc");

var filtObj = objArr.filter(function(elem){
    if(skill == "" && exp == "" && loc == ""){
        return true;
    }else{
        return (skill == elem.skill || exp == elem.exp || loc == elem.loc);
    }
});


    displayJobList(filtObj);

    function displayJobList(data){
        document.getElementById("middleJobList").innerText = "";

        var upperFilter = document.createElement("div");

        upperFilter.innerHTML = '<p><i class="fa-solid fa-filter"></i> Sort by:</p> <select id="sortJobs" onchange="freshFilter()"> <option value = "">Select experience</option> <option value = 1>All</option> <option value= 2>Fresher</option> <option value = 3>Experienced</option> </select>'
        document.getElementById("middleJobList").append(upperFilter);

        data.map(function(ele){

        var maindiv = document.createElement("div");        ////

        var anchor = document.createElement("a");

        anchor.href = ele.linkofpage;  //////////////////////

        anchor.setAttribute("class", "anchorForDetailPage");
        anchor.setAttribute("target", "_blank");
        var h2 = document.createElement("h2");              ////
        h2.innerText = ele.post;
        anchor.append(h2);
        var pstar = document.createElement("p");

        pstar.innerHTML = ele.company + " . 4.1" + ' <span id="starMark">★</span>';  ////

        var subdiv = document.createElement("div");      

        var p1 = document.createElement("p");
        p1.innerHTML = '<i class="fa-solid fa-briefcase"></i> ' + ele.exp;

        var p2 = document.createElement("p");
        p2.innerText ="₹" + ele.salary;

        var p3 = document.createElement("p");
        p3.innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + ele.loc;

        subdiv.append(p1, p2, p3);                       //////



        var pdetails = document.createElement("p");        //////
        pdetails.innerHTML = '<i class="fa-solid fa-address-card"></i> ' + ele.details;


        var pskill = document.createElement("p");                ///////
        pskill.innerHTML = ele.skill;

        var btn = document.createElement("button");                 ///////////
        btn.innerText = "✰ Save";
        btn.setAttribute("id", "saveTheJobButton");

        maindiv.append(anchor, pstar, subdiv, pdetails, pskill, btn);

        document.getElementById("middleJobList").append(maindiv);
      });

      localStorage.setItem("skill", "");
      localStorage.setItem("exp", "");
      localStorage.setItem("loc", "");
      
    }



// left side filter JS------------------------------------------------------------------------------

// filteration in check box
document.getElementById("comp1").addEventListener("change", filt1);
document.getElementById("comp2").addEventListener("change", filt2);
document.getElementById("comp3").addEventListener("change", filt3);
document.getElementById("comp4").addEventListener("change", filt4);
document.getElementById("comp5").addEventListener("change", filt5);

document.getElementById("loc1").addEventListener("change", filtloc1);
document.getElementById("loc2").addEventListener("change", filtloc2);
document.getElementById("loc3").addEventListener("change", filtloc3);
document.getElementById("loc4").addEventListener("change", filtloc4);

function freshFilter(){
    var chk = document.getElementById("sortJobs").value;
    var filtereddata = objArr;

    if(chk == 2){
        filtereddata = objArr.filter(function(elem){
            return elem.exp == "Fresher";
        })
    }

     if(chk == 3){
        filtereddata = objArr.filter(function(elem){
            return elem.exp != "Fresher";
        })
    }

    displayJobList(filtereddata);
}



function filt1(){
    if(document.getElementById("comp1").checked==true){
        var ans = document.getElementById("comp1").value;

        var filteredArr = objArr.filter(function(elem){
           return ans == elem.company;
        });
        displayJobList(filteredArr);
    }else{
        // display whole data
        displayJobList(objArr);
    }
}


function filt2(){
    if(document.getElementById("comp2").checked==true){
        var ans = document.getElementById("comp2").value;

        var filteredArr = objArr.filter(function(elem){
           return ans == elem.company;
        });
        displayJobList(filteredArr);
    }else{
        // display whole data
        displayJobList(objArr);
    }
}


function filt3(){
    if(document.getElementById("comp3").checked==true){
        var ans = document.getElementById("comp3").value;

        var filteredArr = objArr.filter(function(elem){
           return ans == elem.company;
        });
        displayJobList(filteredArr);
    }else{
        // display whole data
        displayJobList(objArr);
    }
}





// left side filter JS------------------------------------------------------------------------------

// filteration in check box

function filt4(){
    if(document.getElementById("comp4").checked==true){
        var ans = document.getElementById("comp4").value;

        var filteredArr = objArr.filter(function(elem){
           return ans == elem.company;
        });
        displayJobList(filteredArr);
    }else{
        // display whole data
        displayJobList(objArr);
    }
}

function filt5(){
    if(document.getElementById("comp5").checked==true){
        var ans = document.getElementById("comp5").value;

        var filteredArr = objArr.filter(function(elem){
           return ans == elem.company;
        });
        displayJobList(filteredArr);
    }else{
        // display whole data
        displayJobList(objArr);
    }
}

function filtloc1(){
    if(document.getElementById("loc1").checked==true){
        var ans = document.getElementById("loc1").value;

        var filteredArr = objArr.filter(function(elem){
           return ans == elem.loc;
        });
        displayJobList(filteredArr);
    }else{
        // display whole data
        displayJobList(objArr);
    }
}

function filtloc2(){
    if(document.getElementById("loc2").checked==true){
        var ans = document.getElementById("loc2").value;

        var filteredArr = objArr.filter(function(elem){
           return ans == elem.loc;
        });
        displayJobList(filteredArr);
    }else{
        // display whole data
        displayJobList(objArr);
    }
}

function filtloc3(){
    if(document.getElementById("loc3").checked==true){
        var ans = document.getElementById("loc3").value;

        var filteredArr = objArr.filter(function(elem){
           return ans == elem.loc;
        });
        displayJobList(filteredArr);
    }else{
        // display whole data
        displayJobList(objArr);
    }
}

function filtloc4(){
    if(document.getElementById("loc4").checked==true){
        var ans = document.getElementById("loc4").value;

        var filteredArr = objArr.filter(function(elem){
           return ans == elem.loc;
        });
        displayJobList(filteredArr);
    }else{
        // display whole data
        displayJobList(objArr);
    }
}


// Shivani footer js------------
// if ('WebSocket' in window) {
//     (function () {
//         function refreshCSS() {
//             var sheets = [].slice.call(document.getElementsByTagName("link"));
//             var head = document.getElementsByTagName("head")[0];
//             for (var i = 0; i < sheets.length; ++i) {
//                 var elem = sheets[i];
//                 var parent = elem.parentElement || head;
//                 parent.removeChild(elem);
//                 var rel = elem.rel;
//                 if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
//                     var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
//                     elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
//                 }
//                 parent.appendChild(elem);
//             }
//         }
//         var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
//         var address = protocol + window.location.host + window.location.pathname + '/ws';
//         var socket = new WebSocket(address);
//         socket.onmessage = function (msg) {
//             if (msg.data == 'reload') window.location.reload();
//             else if (msg.data == 'refreshcss') refreshCSS();
//         };
//         if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
//             console.log('Live reload enabled.');
//             sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
//         }
//     })();
// }
// else {
//     console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
// }
// ]]>