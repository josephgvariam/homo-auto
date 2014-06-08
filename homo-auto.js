/*
  Welcome to Homo-Auto
  Home automation using RaspberryPi and Arduino.
  Arduino loaded with Firmata and controlled by a RaspberryPi running node with Johnny5.

  Sensors: ultrasound
  LEDs

*/

//var Backbone = require('backbone');

/*
var Meal = Backbone.Model.extend({
  defaults: {
    "appetizer":  "caesar salad",
    "entree":     "ravioli",
    "dessert":    "cheesecake"
  }
});

console.log("Dessert will be " + (new Meal).get('dessert'));
*/

var five = require("johnny-five");
var board = new five.Board();
var ping, led;

board.on("ready", function() {
  led = new five.Led(13);
  ping = new five.Ping(7);

  ping.on('change', function(err, val){
    console.log(this.cm);
    if(this.cm < 5){
      led.on();
    }
    else{
      led.off();
    }
  });

});
