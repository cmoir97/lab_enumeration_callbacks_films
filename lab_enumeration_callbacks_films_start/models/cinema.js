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
  if (result.length > 0) {
    return result[0].title;
  } else {
    return "No films from this year"
  }
}

Cinema.prototype.filmLengthCheck = function (films, length) {
  const result = films.filter((film) => {
    if (film.length > length) {
      return true;
    } else {
      return false;
    }
  });
  return result[0].title
}

Cinema.prototype.totalFilmLengths = function (films) {
  const result = films.reduce((sum, film) => {
    return sum + film.length;
  }, 0);
  return result
}
