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
      throw 'El evento' + eventName + 'no existe en el objeto';
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
  constructor(title, year, duration) {
    super(['play', 'pause', 'resume']);
    this.title = title;
    this.year = year;
    this.duration = duration;
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
}

var matrix = new Movie("Matrix", 1999, 2.30);

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

var matrixActor = new Actor("Keanu Reeves", 54);
