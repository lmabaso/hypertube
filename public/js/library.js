// var initUrl = "https://yts.am/api/v2/list_movies.json";

// // api

// var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": initUrl,
//         "method": "GET",
//         "headers": {},
//         "data": "{}"
// }

// $.ajax(settings).done(function (response) {
//         const movies = response.data.movies;
//         var str = '<div class="row">';
//         var nam;
//         // for(i = 0; i < movies.length; i++){
//         //         str += '<div class="column">';
//         //         str += '<div class="data-card card">';
//         //         str +=     '<div id="card-'+i+'" class="wrapper" onclick="openMovie('+movies[i].id+')">';
//         //         str +=     '<div class="date">';
//         //         str +=         '<span class="day">'+ movies[i].year +'</span>';
//         //         str +=     '</div>';
//         //         str +=     '<div class="data">';
//         //         str +=         '<div class="content">';
//         //         // str +=         '<span class="author">'+ movies[i].title  +'</span>';
//         //         str +=            '<h1 class="title"><a href="#">'+ movies[i].title  +'</a></h1>';
//         //         str +=            ' <p class="text">'+ movies[i].summary  +'</p>';
//         //         // str +=            '<label for="show-menu" class="menu-button"><span></span></label>';
//         //         str +=         '</div>';
//         //         str +=         '<input type="checkbox" id="show-menu" />';
//         //         str +=         '<ul class="menu-content">';
//         //         str +=          '<li><a href="#" class="fa fa-bookmark-o"></a></li>';
//         //         str +=          '<li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>';
//         //         str +=          '<li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>';
//         //         str +=         '</ul>';
//         //         str +=     '</div>';
//         //         str +=     '</div>';
//         //         str += '</div>';
//         //         str += '</div>';


//         // }
//         // str += '</div>'
//         // $('#authors').html(str);
//         // for(i = 0; i < movies.length; i++){
//         //         $('#card-'+i).css({'background-image': 'url('+movies[i].medium_cover_image+')', 'background-repeat': 'no-repeat', 'background-size': '250px'});
//         // }
//         console.log(response);
// });

// function openMovie(movieid){
//         alert(movieid);
// }
