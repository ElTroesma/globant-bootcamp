"use strict";
class Movie {
  constructor(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
  }
  play() {}
  pause() {}
  resume() {}
}

var matrix = new Movie("Matrix", 1999, 2.30);
console.log(matrix);
