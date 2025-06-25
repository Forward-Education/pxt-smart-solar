# pxt-fwd-solar

Smart Solar Kit, by Forward Education.

Find us at [forwardedu.com](https://forwardedu.com/) and [learn.forwardedu.com](https://learn.forwardedu.com/). Learn more about the Smart Solar Kit on the [product page](https://forwardedu.com/products/smart-solar-energy-kit).

### ~ reminder

![works with micro:bit V2 only image](/static/v2/v2-only.png)

These blocks require the [micro:bit V2](/device/v2). If you use them with a V1 micro:bit you will see the 927 error code on the screen.

### ~

## Example Usage

Our learning systems are designed to simplify teaching coding and computer science for educators at all experience levels. Our Smart Solar Kit can be used on its own or joined with other kits to access our wider library of sensors, motors, lights, and buttons. Check out our libraries of [lessons](https://learn.forwardedu.com/lesson-library), [projects](https://learn.forwardedu.com/projects/), and [tutorials](https://learn.forwardedu.com/tutorials/). Samples of coding with the Smart Solar Kit can be seen below.

The solar panel is charging a battery and the energy meter is between it. When the current and voltage is above an acceptable level a happy face is shown. If not a sad face is shown. The current and voltage readings can be displayed on demand using the micro:bit buttons and screen.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showNumber(sensors.current1.current())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(sensors.voltage1.voltage())
})
basic.forever(function () {
    if (sensors.current1.isPastThreshold(100, sensors.ThresholdDirection.Over) && sensors.voltage1.isPastThreshold(2, sensors.ThresholdDirection.Over)) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
```

Again, the solar panel is charging a battery and the energy meter is between it, but this time the solar panel can be rotated with a positional servo motor. Our goal is to find the optimal angle of the solar panel for current generation. We can do this by pressing the A button. This triggers a check of current generation at 0°, 90°, 180°, and 270° positions. At each angle it's noted if the current generation outperformed previous angles. At the end, the servo is set to the angle with the best current generation.

```blocks
let reading0 = 0
let reading90 = 0
let optimalAngle = 0
let reading180 = 0
let reading270 = 0
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.leftServo, 0)
    basic.pause(5000)
    reading0 = fwdSensors.current1.current()
    fwdMotors.setAngle(fwdBase.leftServo, 90)
    basic.pause(5000)
    reading90 = fwdSensors.current1.current()
    if (reading0 > reading90) {
        optimalAngle = 0
    } else {
        optimalAngle = 90
    }
    fwdMotors.setAngle(fwdBase.leftServo, 180)
    basic.pause(5000)
    reading180 = fwdSensors.current1.current()
    if (reading180 > optimalAngle) {
        optimalAngle = 180
    }
    fwdMotors.setAngle(fwdBase.leftServo, 270)
    basic.pause(5000)
    reading270 = fwdSensors.current1.current()
    if (reading180 > optimalAngle) {
        optimalAngle = 270
    }
    fwdMotors.setAngle(fwdBase.leftServo, optimalAngle)
})
basic.forever(function () {

})
```

## Supported Targets

-   for PXT/microbit

## License

MIT
