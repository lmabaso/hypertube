function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

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

// Get the modal
var modal = document.getElementById('id01') || document.getElementById('id02');
// var modal2 = ;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// function loadPosition() {
//     $.ajax({
//         url: "ajax.php",
//         type: "POST",
//         data:  {position: 'true', lat: position.coords.latitude, long: position.coords.longitude},
//         success: function (response) {
//             console.log("suceess")
//         }
//     });
// }

$(document).ready(function(){
    $("form").submit(function(){
        // alert($("#uname").val());
        //  $.ajax({
        //     url: "public/ajax/ajax.php",
        //     type: "POST",
        //     data:  {login: 'true', username: $("#uname").val(), pwd: $("#psw").val()},
        //     success: function (response) {
        //         alert(response);
        //         console.log("suceess");
        //     }
            $().load( "<?php echo site_url('controllername/methodname')?>" );
        });

        // $.post('public/ajax/ajax.php?login=true&username='+$("#uname").val()+'&pwd='+$("#psw").val(), function (response){
        //     console.log(response);
        // });

    });
});