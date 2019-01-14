window.onscroll = function() {myFunction()};

var navbar = document.getElementById("topbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Get Logout button
var logout = document.getElementById('logout');

// Get the modal
var modal = document.getElementById('id01') || document.getElementById('id02');

window.onclick = function(event) {
// When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
        modal.style.display = "none";
    }
// When user clicks button it must logout
    if (event.target == logout) {
        location.replace("http://127.0.0.1:8080/hypertube/home/logout");
    }
}