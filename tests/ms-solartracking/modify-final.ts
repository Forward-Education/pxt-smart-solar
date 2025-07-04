namespace msSolartrackingModify {
    input.onButtonPressed(Button.A, function () {
        fwdMotors.setAngle(fwdBase.leftServo, 0)
        power = 0
    })
    function calculatePower() {
        current_Amps = fwdSensors.current1.current() / 1000
        power = current_Amps * fwdSensors.voltage1.voltage()
    }
    input.onButtonPressed(Button.B, function () {
        displayingButtonPress = true
        calculatePower()
        basic.showString("P:")
        basic.showNumber(power)
        basic.showString("W")
        basic.pause(1000)
        displayingButtonPress = false
    })
    let displayingButtonPress = false
    let power = 0
    let current_Amps = 0
    current_Amps = 0
    power = 0
    displayingButtonPress = false
    fwdMotors.setAngle(fwdBase.leftServo, 0)
    basic.forever(function () {
        if (displayingButtonPress == false) {
            calculatePower()
            if (power > 0.2) {
                basic.showIcon(IconNames.Diamond)
                music.play(
                    music.builtinPlayableSoundEffect(soundExpression.twinkle),
                    music.PlaybackMode.UntilDone
                )
            } else if (power <= 0.2 && power > 0.01) {
                basic.showIcon(IconNames.SmallDiamond)
                music.play(
                    music.tonePlayable(175, music.beat(BeatFraction.Whole)),
                    music.PlaybackMode.UntilDone
                )
                fwdMotors.setAngle(
                    fwdBase.leftServo,
                    fwdMotors.getAngle(fwdBase.leftServo) + 15
                )
                if (fwdMotors.getAngle(fwdBase.leftServo) > 170) {
                    fwdMotors.setAngle(fwdBase.leftServo, 0)
                }
            } else {
                fwdMotors.setAngle(fwdBase.leftServo, 0)
                music.play(
                    music.builtinPlayableSoundEffect(soundExpression.yawn),
                    music.PlaybackMode.UntilDone
                )
                basic.showIcon(IconNames.No)
            }
        }
    })
}
