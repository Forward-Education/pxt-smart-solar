namespace projCurrentMonitor {
    // The code within this loop will run every 500 milliseconds (aka 0.5 seconds).
loops.everyInterval(500, function () {
    // This is a conditional statement that evaluates the value of the 'current' running through the Energy Sensor to the load.
    if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
        // If the current is greater than 5 milliamps and less than or equal to 20 milliamps, a single dot will appear on the LEDs. This indicates a low current.
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (fwdSensors.current1.current() > 20 && fwdSensors.current1.current() <= 40) {
        // If the current is greater than 20 milliamps and less than or equal to 40 milliamps, 9 dots will appear on the LEDs. This indicates a slightly higher current.
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else if (fwdSensors.current1.current() > 40 && fwdSensors.current1.current() <= 60) {
        // If the current is greater than 40 milliamps and less than or equal to 60 milliamps, 14 dots will appear on the LEDs. This indicates an even higher current.
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
    } else if (fwdSensors.current1.current() > 60 && fwdSensors.current1.current() <= 80) {
        // If the current is greater than 60 milliamps and less than or equal to 80 milliamps, 19 dots will appear on the LEDs. This indicates an even higher current.
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (fwdSensors.current1.current() > 80) {
        // If the current is greater than 80 milliamps, 23 dots will appear on the LEDs. This indicates the highest current.
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        // In all other situations, the display will show an X to indicate no real current is flowing.
        basic.showIcon(IconNames.No)
    }
})

}