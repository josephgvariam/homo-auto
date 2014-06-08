/*
  Welcome to Homo-Auto
  Home automation using RaspberryPi and Arduino.
  Arduino loaded with Firmata and controlled by a RaspberryPi running node with Johnny5.

  Sensors: ultrasound
  LEDs

*/

var Backbone = require('backbone');


var Meal = Backbone.Model.extend({
  defaults: {
    "appetizer":  "caesar salad",
    "entree":     "ravioli",
    "dessert":    "cheesecake"
  }
});

console.log("Dessert will be " + (new Meal).get('dessert'));