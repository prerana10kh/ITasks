/* ===== SELECTORS ===== */
var employeeListHolder = document.querySelector(".employee-list");
var interviewListHolder = document.querySelector(".interviews");

var addEmployeeModal = document.querySelector("#employeeModal");
var addInterviewModal = document.querySelector("#interviewModal");

/* Hide modals initially */
addEmployeeModal.style.display = "none";
addInterviewModal.style.display = "none";


/* ===== SHOW MODALS ===== */
function showAddEmpModal() {
    addEmployeeModal.style.display = "block";
}

function showAddIntModal() {
    addInterviewModal.style.display = "block";
}


/* ===== ADD EMPLOYEE ===== */
function addEmployee() {

    var name = document.querySelector("#name").value;
    var surname = document.querySelector("#surname").value;
    var position = document.querySelector("#position").value;
    var department = document.querySelector("#department").value;
    var email = document.querySelector("#email").value;
    var salary = document.querySelector("#salary").value;

    var newItem = `
        <div class="employee-card">
            <img class="user-img" src="images/user1.webp" alt="">
            <div class="employee-details">
                <h3><span class="name-format">${name}</span> 
                <span class="name-format">${surname}</span></h3>
                <p>${position}</p>
                <p>${department}</p>
                <p>${email}</p>
                <p>£${salary}</p>
            </div>
        </div>
    `;

    employeeListHolder.insertAdjacentHTML("beforeend", newItem);

    addEmployeeModal.style.display = "none";

    /* Clear Inputs */
    document.querySelector("#name").value = "";
    document.querySelector("#surname").value = "";
    document.querySelector("#position").value = "";
    document.querySelector("#department").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#salary").value = "";
}


/* ===== ADD INTERVIEW ===== */
function addInterview() {

    var departmentInterview = document.querySelector("#int-department").value;
    var positionInterview = document.querySelector("#int-position").value;

    var newInterview = `
        <div class="list-item">
            <h3>${departmentInterview}</h3>
            <p>${positionInterview}</p>
            <button class="accept-btn">Accept</button>
            <button class="reject-btn">Reject</button>
        </div>
    `;

    interviewListHolder.insertAdjacentHTML("beforeend", newInterview);

    addInterviewModal.style.display = "none";

    /* Clear Inputs */
    document.querySelector("#int-department").value = "";
    document.querySelector("#int-position").value = "";
}