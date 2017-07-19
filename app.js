
var movie = require("./movie");

// not only my favorite, but the 3 best movies ever:
var threeFavoriteMovies = [
  'The Princess Bride',
  'Shaun the Sheep Movie',
  'Monty Python and the Holy Grail',
];

threeFavoriteMovies.forEach(function(film){
  //console.log(film + ': well, something is happening');
  movie(film);
});