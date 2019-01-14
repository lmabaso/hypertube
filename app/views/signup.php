<div id="id02" class="modal">
    <div class="modal-content animate">
        <div class="imgcontainer">
        <span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>
        </div>

        <div class="container">
        <label for="uuname"><b>Username</b></label>
        <input type="text" placeholder="Enter Your Username" name="uuname" id="uuname">
        <label for="err_uun" id="err_username"></label>

        <label for="uname"><b>Name</b></label>
        <input type="text" placeholder="Enter Your Name" name="uname" id="uname">
        <div id="err_name"></div>

        <label for="uname"><b>Surname</b></label>
        <input type="text" placeholder="Enter Your Name" name="sname" id="sname">
        <div id="err_name"></div>

        <label for="psw"><b>Email</b></label>
        <input type="email" placeholder="Enter Your Email" name="email" id="email">
        <div id="err_email"></div>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Your Password" name="pwd" id="pwd">
        <div id="err_password"></div>

        <label for="psw"><b>Repeat Password</b></label>
        <input type="password" placeholder="Enter Your Password Again" name="psw-agn" id="pwd-agn">
        <div id="err_again"></div>

        <button id="signup">Register</button>
        </div>

        <div class="container" style="background-color:#f1f1f1">
        <button type="button" onclick="document.getElementById('id02').style.display='none'" class="cancelbtn">Cancel</button>
        </div>
    </form>
</div>