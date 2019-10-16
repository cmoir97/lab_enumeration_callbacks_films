const Cinema = function (films) {
  this.films = films;
};

module.exports = Cinema;

Cinema.prototype.filmTitles = function (films) {
  const result = films.map((film) => {
    return film.title;
  });
}
