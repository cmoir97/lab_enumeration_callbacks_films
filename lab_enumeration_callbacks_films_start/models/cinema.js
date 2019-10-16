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

Cinema.prototype.findFilmByGenre = function (films, genre) {
  const result = films.filter((film) => {
    if (film.genre === genre) {
      return true;
    } else {
      return false;
    }
  });
  return result[0].title
}

Cinema.prototype.filmsByYear = function (films, year) {
  const result = films.filter((film) => {
    if (film.year === year) {
      return true;
    } else {
      return false;
    }
  });
  return result[0].title
}
