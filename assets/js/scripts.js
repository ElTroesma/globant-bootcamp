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

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var matrixActor = new Actor("Keanu Reeves", 54);
console.log(matrixActor);
