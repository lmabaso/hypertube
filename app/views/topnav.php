<div class="topnav" id="topbar">
    <div class="sidenav-containter">
        <span onclick="openNav()">&#9776; HyperTube</span>
        <!-- <h2 style="float: left; padding: 14px 0;"></h2> -->
        <div >

        </div>
    </div>
    <div class="search-container">
        <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" id="myInput">
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>
    <div class="user-containter">
        <?php
        if ($data['isloggedin'] == true)
        {
            echo "Hello " . $data['name'];
        ?>
            <button id="logout" style="width:auto;">Logout</button>
        <?php
        }
        else if ($data['isloggedin'] == false)
        {
        ?>
            <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>
            <button onclick="document.getElementById('id02').style.display='block'" style="width:auto;">Signup</button>
        <?php
        }
        ?>
    </div>
</div>
<script src="public/js/login.js"></script>
<script src="public/js/search.js"></script>