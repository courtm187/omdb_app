angular.module("omdb")
  .controller('MainCtrl', function($scope, movieService){
    $scope.mc = {}
    $scope.mc.movies = movieService.movies;
    $scope.mc.singleMovie =
    $scope.getMovie = function() {
      movieService.searchMovie($scope.mc.movie).then(function(res){
      // movieService.searchMovie($state.params.id).then(function(res){
        // $scope.mc.movie = null;
        // $scope.mc.movies.push(res.data);
        // $scope.mc.movies = res.data.Search;
        $scope.mc.movies = movieService.setMovies(res.data);
      })
    }
    // $scope.setMovies = function(){
    //   movie
    // }

  })
