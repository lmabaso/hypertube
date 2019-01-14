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