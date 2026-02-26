let form = document.getElementById("login-form");
let modal = document.getElementById("modal");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("uname").value;
    let password = document.getElementById("pwd").value;

    if(username == "admin" && password == "1234") {
        window.location.href = "index.html";
    }
    else {
        modal.style.display = "block";
    }

});

function dismissModal() {
    modal.style.display = "none";
}