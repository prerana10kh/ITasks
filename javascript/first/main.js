// Selecting Elements
var btn = document.querySelector("#myBtn");
var userInput = document.querySelector("#user-input");
var container = document.querySelector("#result");
var body = document.querySelector("body");

// Timetable Arrays
var monday = ["Economics", "Web Technology", "Management", "Software Engineering"];
var tuesday = ["Web Technology", "Human Resource Management"];
var wednesday = ["Software Engineering", "Organizational Behavior", "Micro Economics"];
var thursday = ["Web Technology", "Project Management", "Statistics"];
var friday = ["No class! YAY! :)"];


// Button Hover Color Change
function setHoverColor() {
    btn.style.background = "#001430";
    btn.style.color = "white";
}

function setNormalColor() {
    btn.style.background = "";
    btn.style.color = "";
}

// Events
btn.addEventListener("mouseover", setHoverColor);
btn.addEventListener("mouseout", setNormalColor);
btn.addEventListener("click", printTimetable);

// Print Timetable Function
function printTimetable() {

    container.innerHTML = "";   // clear previous result
    var day = userInput.value.toLowerCase();

    var schedule = [];

    if(day === "monday"){
        schedule = monday;
    }
    else if(day === "tuesday"){
        schedule = tuesday;
    }
    else if(day === "wednesday"){
        schedule = wednesday;
    }
    else if(day === "thursday"){
        schedule = thursday;
    }
    else if(day === "friday"){
        schedule = friday;
    }
    else{
        schedule = ["Invalid Day Entered"];
    }

    // Display Subjects
    for(var i = 0; i < schedule.length; i++){
        var paraText = document.createElement("p");
        var paraNode = document.createTextNode(schedule[i]);
        paraText.appendChild(paraNode);
        container.appendChild(paraText);
    }
}
