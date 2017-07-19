
var movie = require("./movie");

var threeFavoriteMovies = [
  'The Princess Bride',
  'Shaun the Sheep Movie',
  'Monty Python and the Holy Grail',
];

threeFavoriteMovies.forEach(function(film){
  //console.log(film + ': well, something is happening');
  movie(film);
});