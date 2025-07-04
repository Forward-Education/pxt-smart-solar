# Sun-Tracking Solar Panel - Modify Tutorial
```package
fwd-smart-solar=github:Forward-Education/pxt-smart-solar#v1.0.3
```

```template
// When Button A is pressed, reset the servo motor to 0 degrees and reset power to 0.
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.leftServo, 0)
    power = 0
})

// This function calculates power from the Energy Sensor's voltage and current readings.
function calculatePower () {
    // Read current in milliamps (mA) and convert to amps (A) by dividing by 1000.
    current_Amps = fwdSensors.current1.current() / 1000
    // Power (Watts) = Current (Amps) * Voltage (Volts).
    power = current_Amps * fwdSensors.voltage1.voltage()
}

let power = 0
let current_Amps = 0
current_Amps = 0
power = 0
fwdMotors.setAngle(fwdBase.leftServo, 0)

// This code runs repeatedly, forever.
basic.forever(function () {
    // First, calculate the power being generated.
    calculatePower()
    // This is a conditional statement that makes decisions based on the power.
    // IF power is greater than 0.3 W (meaning good light source), THEN:
    if (power > 0.3) {
        basic.showIcon(IconNames.Diamond) // Show a large diamond icon.
    } else { // ELSE (if power is 0.3 W or less), THEN:
        basic.showIcon(IconNames.SmallDiamond) // Show a small diamond icon.
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 10)  // Move the servo motor by 10 degrees to continue to search for a better light source.
        // If the servo motor goes beyond 180 degrees, reset it to 0 to start a new sweep.
        if (fwdMotors.getAngle(fwdBase.leftServo) > 180) {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
```

## Sun-Tracking Solar Panel - Modify Tutorial @showdialog
Today, we are going to customize and enhance our **sun-tracking solar panel**! 

We'll start with the base code from the 'Use' tutorial and modify it to make our panel smarter and more responsive. 

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-solar/main/curriculum/ms-solartracking/render.png" alt="Full sun-tracking solar panel render" style="display: block; width: 100%; margin:auto;">

## Step 1 @showdialog
IMPORTANT! Make sure your Climate Action Kit Breakout Board is turned on and your micro:bit is plugged into your computer.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-solar/main/curriculum/general-assets/pluganim.webp" alt="Plug micro:bit into USB port on computer" style="display: block; width: 40%; margin:auto;">

## Step 2 @showdialog
Click the three dots beside the ``|Download|`` button, then click on _Connect Device_.
Next, follow the steps to pair your micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-solar/main/curriculum/general-assets/pairmicrobitGIF.webp"  alt="Pairing gif" style="display: block; width: 60%; margin:auto;">

## Step 3
Click the ``|Download|`` button to download the code to your micro:bit. 

## Step 4
Take a moment to observe your physical panel's movement and look at the starter code in your workspace. Can you identify the main blocks of code and what they do? Look for comments in the code to help you understand each element.

~hint Tell me more!

Recall from the "Use" tutorial:

- The ``||functions:calculatePower||`` function reads the ``||fwdSensors:voltage (V)||`` and ``||fwdSensors:current (mA)||`` from the Energy Sensor and calculates the ``||variables:power||``.

- The ``||basic:forever||`` loop constantly checks the ``||variables:power||`` and decides what the panel should do.

- The ``||logic:if / else||`` conditional statement controls the panel's behavior:

    - IF the power is greater than 0.3 W, it shows a large diamond (meaning it has found a good light source) and stays still.

    - ELSE (if power is 0.3 W or less), it shows a small diamond and moves the servo motor by 10 degrees to search for a better light source. The motor will reset its position if it goes too far.

- ``||input:on button A pressed||`` the panel is reset to its starting position.

hint~

## Step 5
Let's change the speed at which our solar panel sweeps the area! Find the line in the ``||basic:forever||`` loop that moves the ``||fwdMotors:leftServo||``. Change the ``||math:+ 10||`` to a different number.

Experiment! What happens if you change it to ``||math:+ 5||``? What if you change it to ``||math:+ 20||``? Don't forget to redownload your new code to test it!

~hint Tell me more!

This number controls how many degrees the servo motor turns each time it moves.

- If you make the number **larger**, the panel will sweep in bigger "jumps," meaning it will scan its range much faster. However, it might be less precise in finding the exact best spot, as it could skip over it.

- If you make the number **smaller**, the panel will sweep in smaller increments, making it scan slower but potentially more accurately.

hint~

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

basic.forever(function () {
    calculatePower()
    if (power > 0.3) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        // @highlight
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 15)
        if (fwdMotors.getAngle(fwdBase.leftServo) > 180) {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
```
## Step 6

The servo motor currently sweeps from 0 to 180 degrees. What if you want it to cover a smaller area, or a different range? Change the '180' in the ``||logic:if||`` ``||fwdMotors:leftServo||`` ``||logic: > 180||`` block to another positive number.

~hint Tell me more!

- The range of the positional servo motor is 0-270 degrees. Test out a few different values within this range! 

- Download your new code to test it out!

hint~

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

basic.forever(function () {
    calculatePower()
    if (power > 0.3) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 15)
        // @highlight
        if (fwdMotors.getAngle(fwdBase.leftServo) > 120) {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
```

## Step 7
You've learned that ``||variables:power||`` ``||logic:> 0.3||`` means the panel has found a good light source. What if you wanted your panel to be more or less sensitive to light?

Change '0.3' in the main ``||logic:if||`` statement to a different number. For example, try '0.2' or '0.6'. How does this change the panel's behavior?

~hint Tell me more!

The number in this conditional statement is the **power threshold**.

- If the ``||variables:power||`` generated by the solar panel is greater than this threshold, the panel considers the light source to be "good" and stops sweeping.

- If you increase this number (e.g., to 0.6), you are making the panel _less sensitive_ to light. It will only stop if it finds a very strong light source that generates more than 0.6 W of power. If it doesn't find such a strong source, it will keep sweeping.

- If you decrease this number (e.g., to 0.2), you are making the panel _more sensitive_ to light. It will stop even for dimmer light sources that generate more than 0.2 W. This might make it stop searching sooner.

Experiment to find the threshold that works best in your environment!

hint~

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

basic.forever(function () {
    calculatePower()
    // @highlight
    if (power > 0.2) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 15)
        if (fwdMotors.getAngle(fwdBase.leftServo) > 120) {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
```

## Step 8
The panel continues to sweep endlessly, even when there's no light to find! This is because the panel doesn't have a "sleep mode" yet. 

Let's add another condition using the ``||logic:if/else||`` block to represent a "no light" or "sleep mode" condition. Click the + button on the main conditional statement to expand it!

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

basic.forever(function () {
    calculatePower()
    // @highlight
    if (power > 0.2) {
        basic.showIcon(IconNames.Diamond)
    } else if (false) {
    	
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 15)
        if (fwdMotors.getAngle(fwdBase.leftServo) > 120) {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
```

## Step 9
Now, let's set the condition for the ``||logic:else if||`` block. This is for when the panel hasn't met the power threshold, but also isn't in total darkness. 

## Step 10
Drag an ``||logic:and||`` operator into the ``||logic:else if||`` condition. Then, combine the ``||variables:power||`` block with the ``||logic:<=||`` and ``||logic:>||`` operators to create a condition that says: 

"IF power is less than or equal to 0.2 W AND power is greater than 0.01 W, THEN..."

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

basic.forever(function () {
    calculatePower()
    if (power > 0.2) {
        basic.showIcon(IconNames.Diamond)
    } else if (power <= 0.2 && power > 0.01) {
    	
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 15)
        if (fwdMotors.getAngle(fwdBase.leftServo) > 120) {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
```

## Step 11
Now that you have the new condition, drag the old sweeping code inside!

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

basic.forever(function () {
    calculatePower()
    if (power > 0.2) {
        basic.showIcon(IconNames.Diamond)
    } else if (power <= 0.2 && power > 0.01) {
        // @highlight
        basic.showIcon(IconNames.SmallDiamond)
        // @highlight
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 15)
        // @highlight
        if (fwdMotors.getAngle(fwdBase.leftServo) > 120) {
        // @highlight
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        // @highlight
        }
    } else {
    }
})
```

## Step 12
What should happen if there's almost no power (e.g., power < 0.01 W)? This will be our final ``||logic:else||`` condition - also known as our sleep condition!

~hint Tell me more!
Let's make the panel return to its starting position and show a "No" icon, indicating it's completely dark.
hint~

## Step 13 
In the final ``||logic:else||`` block, add ``||fwdMotors:set leftServo to 0°||`` and a ``||basic:show icon||`` block.

Adjust the icon to something that represents a "sleep mode" to you!

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

basic.forever(function () {
    calculatePower()
    if (power > 0.2) {
        basic.showIcon(IconNames.Diamond)
    } else if (power <= 0.2 && power > 0.01) {
        basic.showIcon(IconNames.SmallDiamond)
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 15)
        if (fwdMotors.getAngle(fwdBase.leftServo) > 120) {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    } else {
        // @highlight
        fwdMotors.setAngle(fwdBase.leftServo, 0)
        // @highlight
        basic.showIcon(IconNames.No)
    }
})
```

## Step 14
Let's add sound effects to help us understand what the panel is doing at each stage.

Go to the ``||music:Music||`` category. Add a sound effect to each of your ``||logic:if||``, ``||logic:else if||``, and ``||logic:else||`` conditions.

~hint Tell me more!

- For power > 0.2 W (adequate light), try ``||music:play twinkle until done||``.

- For power <= 0.2 W AND power > 0.01 W (sweeping, some light), try ``||music:play tone for 1 beat||`` at a low pitch. This will produce a beeping effect as the servo motor scans the area.

- For else (sleeping, no light), try ``||music:play yawn until done||``.

hint~

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

basic.forever(function () {
    calculatePower()
    if (power > 0.2) {
        basic.showIcon(IconNames.Diamond)
        // @highlight
        music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    } else if (power <= 0.2 && power > 0.01) {
        basic.showIcon(IconNames.SmallDiamond)
        // @highlight
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 15)
        if (fwdMotors.getAngle(fwdBase.leftServo) > 120) {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    } else {
        fwdMotors.setAngle(fwdBase.leftServo, 0)
        // @highlight
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.No)
    }
})
```

## Optional Challenge: Displaying Power @showdialog
What if you want to know the exact power reading at any position? Right now, you have to look at the simulators on your computer and do the calculation yourself. 

Let's add a feature to display the current ``||variables:power||`` value when you press button B.

## Challenge Step 1
Drag an ``||input:on button B pressed||`` block into your workspace. Inside this block, add a ``||basic:show number||`` block and place the ``||variables:power||`` variable inside it. Also, add a ``||basic:pause (ms)||`` block for 1000 milliseconds (1 second) after showing the number.

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

input.onButtonPressed(Button.B, function () {
    calculatePower()
    basic.showNumber(power)
    basic.pause(1000)
})
```

## Challenge Step 2
To add context to the reading, let's add some text before and after it.

Add a ``||basic:show string||`` block with "P:" before the ``||basic:show number||`` block. Add another ``||basic:show string||`` block with "W" after the ``||basic:show number||`` block. 

~hint Tell me more!

- "P:" indicates that the power calculation will follow!

- "W" represents the unit for power - Watts! 

hint~

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

input.onButtonPressed(Button.B, function () {
    calculatePower()
    // @highlight
    basic.showString("P:")
    basic.showNumber(power)
    // @highlight
    basic.showString("W")
    basic.pause(1000)
})
```

## Challenge Step 3
Now, download this code to your micro:bit and test it out. Press Button B. What do you notice?

~hint Tell me more!

You might notice that when you press Button B, the ``||basic:forever||`` loop's animation seems to "fight" with your power display. The ``||basic:forever||`` loop is constantly trying to update the screen, which can make your power reading hard to see!

hint~

## Challenge Step 4
To fix this "glitch," we need a way to tell the ``||basic:forever||`` loop to pause its regular display whenever we press Button B. We'll use a new **boolean variable** for this!

Go to the ``||variables:Variables||`` category and click "Make a Variable." Name it 'displayingPower'.

~hint Tell me more!

A **boolean variable** is a special type of variable that can only hold one of two values: true or false. Think of it like a light switch that can only be "on" or "off."

In our code, we'll use ``||variables:displayingPower||`` as a "flag" to track the state of our micro:bit's screen.

- When Button B is pressed, we'll set ``||variables:displayingPower||`` to ``||logic:true||`` (like flipping the switch "on").

- When the power reading is done, we'll set it back to false (flipping the switch "off").

This "flag" will then be used by the ``||basic:forever||`` loop to decide whether it should display its normal icons or wait for the power display to finish.

hint~

## Challenge Step 5
Drag a ``||variables:set displayingPower to||`` ``||logic:false||`` block into your workspace, inside the ``||basic:on start||`` block. 

```blocks
current_Amps = 0
power = 0
// @highlight
displayingPower = false
fwdMotors.setAngle(fwdBase.leftServo, 0)
```

## Challenge Step 6
Now, let's use this new variable inside our ``||input:on button B pressed||`` block.

When Button B is pressed, first set ``||variables:displayingPower||`` to ``||logic:true||``. Then, after the ``||basic:pause||`` block, set it back to ``||logic:false||``. This tells the program to "turn off" the normal display, show the power, then "turn it back on."

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

input.onButtonPressed(Button.B, function () {
    // @highlight
    displayingPower = true
    calculatePower()
    basic.showString("P:")
    basic.showNumber(power)
    basic.showString("W")
    basic.pause(1000)
    // @highlight
    displayingPower = false
})
```

## Challenge Step 7
Finally, we need to make sure the main ``||basic:forever||`` loop only runs its normal logic if we are _not currently displaying the power_.

Drag an ``||logic:if then||`` block around all the existing code inside your ``||basic:forever||`` loop. Set its condition to ``||variables:displayingPower||`` ``||logic:= false||``.

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

basic.forever(function () {
    // @highlight
    if (displayingPower == false) {
        calculatePower()
        if (power > 0.2) {
            basic.showIcon(IconNames.Diamond)
            music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
        } else if (power <= 0.2 && power > 0.01) {
            basic.showIcon(IconNames.SmallDiamond)
            music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 15)
            if (fwdMotors.getAngle(fwdBase.leftServo) > 120) {
                fwdMotors.setAngle(fwdBase.leftServo, 0)
            }
        } else {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
            music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
            basic.showIcon(IconNames.No)
        }
    }
})
```

## Reflection
Before we wrap up:
- Think about something in this project that was tricky. 
- How did you figure it out? How did that make you feel?
- What is one additional thing you could do to improve your sun-tracking solar panel?

## Finished
Click the ``|Done|`` button to finish this tutorial.