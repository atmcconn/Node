/*
Nodebot workshop. Used rwaldo's github repository for resources
Build a 'fire alarm' that sounds when the air temperature is more than 50 C

Resources:
https://github.com/rwaldron/johnny-five/wiki/Led
https://github.com/rwaldron/johnny-five/blob/master/docs/piezo.md
https://github.com/rwaldron/johnny-five/master/docs/temperature-tmp36.md
https://github.com/rwaldron/johnny-five/wiki/Button#usage



var jfive = require('johnny-five')
var board = new jfive.Board()

board.on('ready', function() {
	
	// Attach a temperature sensor TMP36 to A0
	var tmp36 = new jfive.Thermometer({
		controller: 'TMP36',
		pin: 'A0'
	})
	
	// Attach a piezo to pin 9
	var piezo = new jfive.Piezo(9)
	var sirenInterval = null
	// Attach a LED to pin 13
	var led = new jfive.Led(13)
	
	// Attach a button to pin 5
	var btn = new jfive.Button(5)
	var btnPush = false
	
	function alarm() {
		led.on()
		led.strobe(1000)
		//piezo.tone(jfive.Piezo.Notes.c4, 750)
		sirenInterval = setInterval(function() {
			piezo.tone(jfive.Piezo.Notes.c4, 750)
			}, 1000)	
	}
	
	function silence() {
		piezo.off()
		led.off()
		clearInterval(sirenInterval)
//		piezo.noTone()
		piezo.off()		
	}
	
	// When the temperature sensor detects a temperaure above 50 C the piezo should sound
	//    and the LED should flash on and off continuously
	tmp36.on('change', function() {
		if (this.celsius > 50) {
			if( !btnPush ) {
				alarm()
			}
		}
	// If the temperature drops below 50 C then the piezo and led should switch off
		else {
			piezo.off()
			silence()
			btnPush = false
			}
	})

	// If the button is pressed, the piezo and LED should turn off and should not turn on again
	// unless the temperature drops below 50 C	
	btn.on('press', function() {
		btnPush = true
		silence()
	})
})

*/

var five = require('johnny-five')
var board = new five.Board()

board.on('ready', function () {
  var piezo = new five.Piezo(9)
  var led = new five.Led(13)
  var btn = new five.Button(5)
  var thermo = new five.Thermometer({
    controller: 'TMP36',
    pin: 'A0'
  })

  var threshold = 50
  var isOnFire = false
  var isReset = false

  var sirenInterval = null

  // Sound the alarm
  function panic () {
    if (isOnFire) return
    isOnFire = true

    led.strobe(1000)
    piezo.tone(five.Piezo.Notes.c4, 750)
    sirenInterval = setInterval(function () {
      piezo.tone(five.Piezo.Notes.c4, 750)
    }, 1000)
  }

  // Silence the things
  function calm () {
    if (!isOnFire) return
    isOnFire = false

    led.stop().off()
    clearInterval(sirenInterval)
    piezo.noTone()
  }

  // The reset button
  btn.on('press', function () {
    if (!isOnFire) return
    isReset = true
    calm()
  })

  // Watch the temp
  thermo.on('change', function () {
    if (this.celsius > threshold) {
      if (!isReset) {
        panic()
      }
    } else {
      calm()
      isReset = false // clear the reset flag when temp drops below threshold
    }
  })
})