function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("topbar");
var sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

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

$(document).ready(function(){
    $("#login").click(function() {
        var username = $("#luuname").val(),
            password = $("#psw").val();
        location.replace("http://127.0.0.1:8080/hypertube/home/login/"+username+"/"+password);
    });
    $("#logout").click(function() {
        location.replace("http://127.0.0.1:8080/hypertube/home/logout");
    });
    $("#signup").click(function() {
        var username = $("#uuname").val(),
            name = $("#uname").val(),
            surname = $("#sname").val(),
            password = $("#pwd").val(),
            password_again = $("#pwd-agn").val(),
            email = $("#email").val();
        location.replace("http://127.0.0.1:8080/hypertube/home/signup/"+username+"/"+name+"/"+password+"/"+password_again+"/"+email);
    });
    return Promise.resolve("Dummy response to keep the console quiet");
});

//api

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    let authors = data.results;
    return authors.map(function(author) {
        let li = createNode('li'),
            img = createNode('img'),
            span = createNode('span');
        img.src = author.picture.medium;
        span.innerHTML = `${author.name.first} ${author.name.last}`;
        append(li, img);
        append(li, span);
        append(ul, li);
    })
})
.catch(function(error) {
    console.log(JSON.stringify(error));
});