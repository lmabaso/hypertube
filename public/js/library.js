// api

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://yts.am/api/v2/list_movies.json",
    "method": "GET",
    "headers": {},
    "data": "{}"
}

$.ajax(settings).done(function (response) {
        const movies = response.data.movies;
        var str = '<div class="row">';
        var nam;
        str += '<div class="example-1 card">';
        str += '    <div class="wrapper">';
        str += '        <div class="date">';
        str += '            <span class="day">12</span>';
        str += '            <span class="month">Aug</span>';
        str += '            <span class="year">2016</span>';
        str += '        </div>';
        str += '        <div class="data">'
        str += '            <div class="content">';
        str += '                <span class="author">Jane Doe</span>';
        str += '                <h1 class="title"><a href="#">Boxing icon has the will for a couple more fights</a></h1>'
        str += '                <p class="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>'
        str += '                <label for="show-menu" class="menu-button"><span></span></label>';
        str += '            </div>';
        str += '            <input type="checkbox" id="show-menu" />';
        str += '            <ul class="menu-content">';
        str += '                <li>';
        str += '                    <a href="#" class="fa fa-bookmark-o"></a>'
        str += '                </li>';
        str += '                <li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>'
        str += '                <li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>';
        str += '            </ul>';
        str += '        </div>';
        str += '    </div>';
        str += '</div>';


        // for(i = 0; i < movies.length; i++){
        //     str += '<div class="column" id="thumb'+i+'">';
        //     str += '<div class="card" onmouseenter="myFunction2('+i+')" onmouseleave="myFunction3('+i+')">';
        //     // str += '<h3>' + movies[i].title + '</h3>';
        //     str += '<img src="' + movies[i].medium_cover_image +'">';
        //     str += '</div>';
        //     str +='<div id="overlay'+i+'"></div>'
        //     str += '</div>';

        // }
        str += '</div>'
        $('#authors').html(str);
        console.log(response);
});
