namespace msSolartrackingUse {
    input.onButtonPressed(Button.A, function () {
        fwdMotors.setAngle(fwdBase.leftServo, 0)
        power = 0
    })
    function calculatePower() {
        current_Amps = fwdSensors.current1.current() / 1000
        power = current_Amps * fwdSensors.voltage1.voltage()
    }
    let power = 0
    let current_Amps = 0
    current_Amps = 0
    power = 0
    fwdMotors.setAngle(fwdBase.leftServo, 0)
    basic.forever(function () {
        calculatePower()
        if (power > 0.3) {
            basic.showIcon(IconNames.Diamond)
        } else {
            basic.showIcon(IconNames.SmallDiamond)
            fwdMotors.setAngle(
                fwdBase.leftServo,
                fwdMotors.getAngle(fwdBase.leftServo) + 10
            )
            if (fwdMotors.getAngle(fwdBase.leftServo) > 180) {
                fwdMotors.setAngle(fwdBase.leftServo, 0)
            }
        }
    })
}
