const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.filmTitles = function (films) {
  const result = films.map((film) => {
    return film.title;
  });
}

Cinema.prototype.findFilmByTitle = function (films, filmTitle) {
  const result = films.filter((film) => {
    if (film.title === filmTitle) {
      return true;
    } else {
      return false;
    }
  });
  return result[0].title
}
