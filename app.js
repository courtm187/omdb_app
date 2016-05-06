
angular.module("omdb", ['ngRoute'])
  .filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
  });
