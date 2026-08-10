# Panneau solaire suiveur de soleil - Tutoriel de modification

```package
fwd-smart-solar=github:Forward-Education/pxt-smart-solar#v1.2.0
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

## Panneau solaire suiveur de soleil - Tutoriel de modification @showdialog

Aujourd'hui, nous allons personnaliser et améliorer notre **panneau solaire suiveur de soleil** !

Nous allons partir du code de base du tutoriel 'Utiliser' et le modifier pour rendre notre panneau plus intelligent et plus réactif.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/ms-solartracking/render.png" alt="Rendu complet du panneau solaire suiveur de soleil" style="display: block; width: 100%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT ! Assure-toi que la plaque de connexion de ton kit d'Action pour le Climat est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/general-assets/pluganim.webp" alt="Branche le micro:bit au port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/general-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code sur ton micro:bit.

## Étape 4

Prends un moment pour observer le mouvement de ton panneau et regarder le code de départ dans ton espace de travail. Peux-tu identifier les principaux blocs de code et ce qu'ils font ? Cherche les commentaires dans le code pour t'aider à comprendre chaque élément.

~hint Dis-m'en plus !

Souviens-toi du tutoriel 'Utiliser' :

-   La fonction `||functions:calculatePower||` lit la `||fwdSensors:voltage (V)||` et le `||fwdSensors:current (mA)||` du capteur d'énergie et calcule la `||variables:power||`.

-   La boucle `||basic:forever||` vérifie constamment la `||variables:power||` et décide ce que le panneau doit faire.

-   L'instruction conditionnelle `||logic:if / else||` contrôle le comportement du panneau :

    -   SI la puissance est supérieure à 0.3 W, il affiche un grand losange (ce qui veut dire qu'il a trouvé une bonne source de lumière) et reste immobile.

    -   SINON (si la puissance est de 0.3 W ou moins), il affiche un petit losange et déplace le servomoteur de 10 degrés pour chercher une meilleure source de lumière. Le moteur revient à sa position de départ s'il va trop loin.

-   `||input:on button A pressed||`, le panneau revient à sa position de départ.

hint~

## Étape 5

Changeons la vitesse à laquelle notre panneau solaire balaye la zone ! Trouve la ligne dans la boucle `||basic:forever||` qui déplace le `||fwdMotors:leftServo||`. Change le `||math:+ 10||` pour un autre nombre.

Fais des expériences ! Que se passe-t-il si tu le changes en `||math:+ 5||` ? Et en `||math:+ 20||` ? N'oublie pas de retélécharger ton nouveau code pour le tester !

~hint Dis-m'en plus !

Ce nombre contrôle de combien de degrés le servomoteur tourne à chaque mouvement.

-   Si tu rends ce nombre **plus grand**, le panneau balayera par plus grands 'sauts', ce qui veut dire qu'il parcourra sa zone beaucoup plus vite. Par contre, il pourrait être moins précis pour trouver le meilleur endroit exact, car il pourrait le sauter.

-   Si tu rends ce nombre **plus petit**, le panneau balayera par plus petits pas : il ira plus lentement, mais il sera peut-être plus précis.

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

## Étape 6

Pour l'instant, le servomoteur balaye de 0 à 180 degrés. Et si tu voulais couvrir une zone plus petite, ou une plage différente ? Change le '180' dans le bloc `||logic:if||` `||fwdMotors:leftServo||` `||logic: > 180||` pour un autre nombre positif.

~hint Dis-m'en plus !

-   La plage du servomoteur positionnel est de 0 à 270 degrés. Essaye quelques valeurs différentes dans cette plage !

-   Télécharge ton nouveau code pour le tester !

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

## Étape 7

Tu as appris que `||variables:power||` `||logic:> 0.3||` veut dire que le panneau a trouvé une bonne source de lumière. Et si tu voulais que ton panneau soit plus ou moins sensible à la lumière ?

Change '0.3' dans l'instruction `||logic:if||` principale pour un autre nombre. Par exemple, essaye '0.2' ou '0.6'. Comment cela change-t-il le comportement du panneau ?

~hint Dis-m'en plus !

Le nombre dans cette instruction conditionnelle est le **seuil de puissance**.

-   Si la `||variables:power||` générée par le panneau solaire est supérieure à ce seuil, le panneau considère que la source de lumière est 'bonne' et arrête de balayer.

-   Si tu augmentes ce nombre (par exemple à 0.6), tu rends le panneau _moins sensible_ à la lumière. Il ne s'arrêtera que s'il trouve une source de lumière très forte qui génère plus de 0.6 W de puissance. S'il ne trouve pas une source aussi forte, il continuera à balayer.

-   Si tu diminues ce nombre (par exemple à 0.2), tu rends le panneau _plus sensible_ à la lumière. Il s'arrêtera même pour des sources de lumière plus faibles qui génèrent plus de 0.2 W. Il pourrait donc arrêter de chercher plus tôt.

Fais des essais pour trouver le seuil qui fonctionne le mieux dans ton environnement !

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

## Étape 8

Le panneau continue à balayer sans fin, même quand il n'y a aucune lumière à trouver ! C'est parce que le panneau n'a pas encore de 'mode sommeil'.

Ajoutons une autre condition avec le bloc `||logic:if/else||` pour représenter une condition 'pas de lumière' ou 'mode sommeil'. Clique sur le bouton + de l'instruction conditionnelle principale pour l'agrandir !

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

## Étape 9

Maintenant, définissons la condition du bloc `||logic:else if||`. C'est pour quand le panneau n'a pas atteint le seuil de puissance, mais n'est pas non plus dans l'obscurité totale.

## Étape 10

Fais glisser un opérateur `||logic:and||` dans la condition `||logic:else if||`. Ensuite, combine le bloc `||variables:power||` avec les opérateurs `||logic:<=||` et `||logic:>||` pour créer une condition qui dit :

"SI la puissance est inférieure ou égale à 0.2 W ET la puissance est supérieure à 0.01 W, ALORS..."

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

## Étape 11

Maintenant que tu as la nouvelle condition, fais glisser l'ancien code de balayage à l'intérieur !

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

## Étape 12

Que devrait-il se passer s'il n'y a presque pas de puissance (par exemple, puissance < 0.01 W) ? Ce sera notre dernière condition `||logic:else||` - aussi appelée notre condition de sommeil !

~hint Dis-m'en plus !
Faisons revenir le panneau à sa position de départ et affichons une icône 'Non' pour indiquer qu'il fait complètement noir.
hint~

## Étape 13

Dans le dernier bloc `||logic:else||`, ajoute `||fwdMotors:set leftServo to 0°||` et un bloc `||basic:show icon||`.

Choisis une icône qui représente un 'mode sommeil' pour toi !

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

## Étape 14

Ajoutons des effets sonores pour nous aider à comprendre ce que fait le panneau à chaque étape.

Va dans la catégorie `||music:Music||`. Ajoute un effet sonore à chacune de tes conditions `||logic:if||`, `||logic:else if||` et `||logic:else||`.

~hint Dis-m'en plus !

-   Pour une puissance > 0.2 W (lumière suffisante), essaye `||music:play twinkle until done||`.

-   Pour une puissance <= 0.2 W ET > 0.01 W (balayage, un peu de lumière), essaye `||music:play tone for 1 beat||` avec une note grave. Cela produira un effet de bip pendant que le servomoteur balaye la zone.

-   Pour le sinon (sommeil, pas de lumière), essaye `||music:play yawn until done||`.

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

## Réflexion

Avant de terminer :

-   Pense à quelque chose qui était difficile dans ce projet.
-   Comment as-tu trouvé la solution ? Comment t'es-tu senti ?
-   Quelle est une chose de plus que tu pourrais faire pour améliorer ton panneau solaire suiveur de soleil ?

## Terminé

Clique sur le bouton `|Terminé|` pour finir ce tutoriel.
