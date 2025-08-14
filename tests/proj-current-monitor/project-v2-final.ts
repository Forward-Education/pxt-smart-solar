namespace projCurrentMonitor {
    // The code within this loop will run every 500 milliseconds (aka 0.5 seconds).
    loops.everyInterval(500, function () {
        // This is a conditional statement that evaluates the value of the 'current' running through the Energy Sensor to the load.
        if (fwdSensors.current1.isPastThreshold(0.1, fwdEnums.OverUnder.Under)) {
            // If the current is less than 0.1 milliamps, an 'X' will appear on the micro:bit's LEDs. This indicates no real current.
            basic.showIcon(IconNames.No)
        } else if (fwdSensors.current1.isPastThreshold(40, fwdEnums.OverUnder.Under)) {
            // If the current is greater than 0.1 milliamps but under 40 milliamps, a few LEDs will light up. This indicates a current of medium strength.
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . # # # .
                # # # # #
                `)
        } else {
            // If the current is greater than 40 milliamps, 23 dots will appear on the LEDs. This indicates the highest current.
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    })

}