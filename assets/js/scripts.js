"use strict";
class EventEmitter {
  constructor(eventNames) {
    this.eventNames = eventNames;
    this.eventCallbacks = {};
  }

  on(eventName, callback) {
    if (!this.eventNames.includes(eventName)) {
      throw 'El evento' + eventName + 'no existe en el objeto';
    }

    if (!this.eventCallbacks[eventName]) {
      this.eventCallbacks[eventName] = [];
    }
      this.eventCallbacks[eventName].push(callback);
  }

  off(eventName, callback) {}

  emit(eventName) {
    if (!this.eventNames.includes(eventName)) {
      throw 'El evento ' + eventName + ' no existe en el objeto';
    }

    var eventHandlers = this.eventCallbacks[eventName];
    if (eventHandlers) {
      eventHandlers.forEach(function(callback) {
        callback();
      });
    }
  }
}

class Movie extends EventEmitter {
  constructor(title, year, duration, cast) {
    super(['play', 'pause', 'resume']);
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }
  play() {
    this.emit('play');
  }
  pause() {
    this.emit('pause');
  }
  resume() {
    this.emit('resume');
  }
  addCast(cast) {
    if (!cast) {
      throw 'El metodo addCast requiere el argumento *cast* obligatoriamente';
    }
    if (cast.length === undefined) {
      this.cast.push(cast);
    } else {
      this.cast = this.cast.concat(cast);
    }
  }
}

const matrix = new Movie("Matrix", 1999, 2.30);

matrix.on('play', function(){
  alert('This movie`s name is ' + matrix.title + ', he trained in ' + matrix.year + '. Its duration ' + matrix.duration + ' hs.');
});
matrix.on('pause', function() {
  alert('While ' + matrix.title + ' is in pause, take advantage to go to the batrrom!');
});
matrix.on('resume', function() {
  alert(matrix.title + ' has been resumed. Enjoy it!')
});

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const keanu = new Actor('Keanu Reeves', 54);
const cast = [
  new Actor('Anne Moss', 51),
  new Actor('Laurence Fishburne', 57),
  new Actor('Hugo Weaving', 58)
];
matrix.addCast(keanu);
matrix.addCast(cast);
