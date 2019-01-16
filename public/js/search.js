var stuff = 0;

(stuff == 0) ? createTrending(): null;
function autocomplete(inp) {
    inp.addEventListener("input", function(e) {
        var val = this.value;
        if (!val) {
            createTrending();
            return false;
        }
        searchForMovies(val);
    });
}

function searchForMovies(name) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query="+name+"&language=en-US&api_key=d90fc48f1ea90fd744972704a90ef57e",
        "method": "GET",
        "headers": {},
        "data": "{}"
    }

    $.ajax(settings).done(function (response) {
        if (stuff)
        {
            deleteMovieList(stuff);
        }
        var movies = response.results;
        stuff = movies.length;
        console.log(response);
        createMovieList(movies);
    });
}

function createTrending()
{
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/trending/all/day?api_key=d90fc48f1ea90fd744972704a90ef57e",
        "method": "GET",
        "headers": {},
        "data": "{}"
    }

    $.ajax(settings).done(function (response) {
        if (stuff)
        {
            deleteMovieList(stuff);
        }
        var movies = response.results;
        stuff = movies.length;
        console.log(response);
        createMovieList(movies);
    });
}

function createMovieList(movies)
{
    var str = '<div class="row">';
    for(i = 0; i < movies.length; i++){
        str += '<div class="column" id="temp'+i+'">';
        str += '<div class="data-card card">';
        str +=     '<div id="card-'+i+'" class="wrapper" onclick="openMovie('+movies[i].id+')">';
        str +=     '<div class="date">';
        str += (movies[i].release_date) ? '<span class="day">'+ movies[i].release_date +'</span>' : (movies[i].first_air_date) ? '<span class="day">'+ movies[i].first_air_date +'</span>' : '<span class="day">unknown</span>';
        str +=     '</div>';
        str +=     '<div class="data">';
        str +=         '<div class="content">';
        // str +=         '<span class="author">'+ movies[i].title  +'</span>';
        str += (movies[i].title) ? '<h1 class="title"><a href="#">'+ movies[i].title  +'</a></h1>': '<h1 class="title"><a href="#">'+ movies[i].original_name +'</a></h1>';
        str +=            ' <p class="text">'+ movies[i].overview  +'</p>';
        // str +=            '<label for="show-menu" class="menu-button"><span></span></label>';
        str +=         '</div>';
        str +=         '<input type="checkbox" id="show-menu" />';
        str +=         '<ul class="menu-content">';
        str +=          '<li><a href="#" class="fa fa-bookmark-o"></a></li>';
        str +=          '<li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>';
        str +=          '<li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>';
        str +=         '</ul>';
        str +=     '</div>';
        str +=     '</div>';
        str += '</div>';
        str += '</div>';
    }
    str += '</div>';
    $('#authors').html(str);
    for(i = 0; i < movies.length; i++){
        if (movies[i].poster_path)
        {
            $('#card-'+i).css({'background-image': 'url('+"http://image.tmdb.org/t/p/w780/"+movies[i].poster_path+')', 'background-repeat': 'no-repeat', 'background-size': '250px'});
        }
        else{
            $('#card-'+i).css({'background-image': 'url('+"http://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg"+')', 'background-repeat': 'no-repeat', 'background-size': '250px'});
        }
    }
}

function deleteMovieList(a)
{
    for(i = 0; i < a; i++) {
        $("#temp"+i).remove();
    }
}

autocomplete(document.getElementById("myInput"));
function openMovie(movieid){
        alert(movieid);
}