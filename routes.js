angular.module("omdb", ['ngRoute'])
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'movie.results.html'
      })
      .when('/movie', {
        templateUrl: '/partials/movies.html'
      })
});
