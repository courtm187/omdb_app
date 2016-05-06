angular.module("omdb")
  .factory('movieService', function($http) {
  var movies = []

  return {
    movies: movies,
    getMovie: function(movie) {
      return $http.get('http://g-omdbapi.herokuapp.com/?t='+movie+'&y=&plot=short&r=json&page=2')
    },
    searchMovie: function (search) {
      return $http.get('http://g-omdbapi.herokuapp.com/?s='+search+'&y=&plot=short&r=json')
    },
    setMovies: function(newMovies){
      movies = [];
      for(var i = 0; i < newMovies.Search.length; i++){
        var fullMovie = this.getMovie(newMovies.Search[i].Title).then(function (res) {
          movies.push(res.data);
        });
      }
      console.log("MOVIES!!" + movies);

      return movies;
    }

  }
});
