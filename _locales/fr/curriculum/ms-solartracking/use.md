# Panneau solaire suiveur de soleil - Tutoriel Utiliser

```package
fwd-smart-solar=github:Forward-Education/pxt-smart-solar#v1.2.0
```

```template
input.onButtonPressed(Button.A, function () {
    fwdMotors.setAngle(fwdBase.leftServo, 0)
    power = 0
})
function calculatePower () {
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
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 10)
        if (fwdMotors.getAngle(fwdBase.leftServo) > 180) {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
```

## Panneau solaire suiveur de soleil - Tutoriel Utiliser @showdialog

Aujourd'hui, nous allons construire notre propre **panneau solaire qui suit le soleil** !

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/ms-solartracking/render.png" alt="Rendu complet du panneau solaire suiveur de soleil" style="display: block; width: 100%; margin:auto;">

## Étape 1 @showdialog

IMPORTANT ! Assure-toi que la plaque de connexion de ton kit d'Action pour le Climat est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/general-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape 2 @showdialog

Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/general-assets/pairmicrobitGIF.webp"  alt="GIF de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3

Clique sur le bouton `|Télécharger|` pour télécharger le code sur ton micro:bit.

## Étape 4

Regarde ton projet physique. Peux-tu identifier les différents composants de la construction ? À quoi sert chaque pièce ?

~hint Dis-m'en plus !

Ce projet comprend :

1. un **panneau solaire** pour capter la lumière du soleil et la convertir en électricité.

2. un **servomoteur** qui aidera à orienter le panneau vers le soleil pour une conversion la plus efficace possible.

3. un **capteur d'énergie** pour mesurer la tension et le courant électrique produits par le panneau.

4. une **charge** qui est alimentée par le panneau.

hint~

![Panneau solaire annoté](https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/ms-solartracking/render-labeled.png)

## Étape 5

Assure-toi de ne pas être près de lumières vives ou de fenêtres. Ensuite, observe le panneau pendant quelques minutes.

Comment décrirais-tu son mouvement ? Remarques-tu des motifs qui se répètent ?

~hint Dis-m'en plus !

-   Tant que le panneau solaire ne reçoit pas beaucoup de lumière, il tourne dans le sens antihoraire par petits pas jusqu'à atteindre une limite supérieure. Ensuite, il s'arrête, revient à sa position de départ et recommence. Ce cycle se répète indéfiniment.

-   Pendant ce temps, un petit losange s'affiche sur l'écran LED du micro:bit.

hint~

## Étape 6

Maintenant, oriente le panneau vers un mur avec une fenêtre. Qu'arrive-t-il au mouvement du panneau ? Comment a-t-il changé ?

~hint Dis-m'en plus !

-   Le panneau solaire continue de tourner comme décrit à l'étape précédente.

-   Dès que le panneau solaire fait face à une fenêtre ou à une source de lumière assez forte, il devrait rester dans une position fixe.

-   À ce moment-là, les LED changent pour afficher un grand losange, indiquant que le panneau a trouvé une bonne source de lumière.

hint~

## Étape 7

Ce comportement est contrôlé par une **instruction conditionnelle** dans le code. Peux-tu la trouver à l'intérieur de la boucle `||basic:forever||` ci-dessous ?

~hint Dis-m'en plus !

Les **instructions conditionnelles** sont des règles si/alors qui aident notre micro:bit à décider quoi faire. Ici, le code vérifie :

-   SI la `||variables:power||` est `||logic:> 0.3||` W (bonne source de lumière), ALORS le micro:bit affiche une icône de losange.

-   SINON (si la puissance est de 0,3 W ou moins), ALORS un petit losange s'affiche sur le micro:bit et le `||fwdMotors:leftServo||` avance de 10 degrés par rapport à sa dernière position. Si la dernière position était 180 degrés, le `||fwdMotors:leftServo||` recommence à 0 degré.

Cette instruction conditionnelle est à l'intérieur d'une boucle `||basic:forever||`, ce qui signifie qu'elle est évaluée sans arrêt.

hint~

```blocks
// @hide
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}

basic.forever(function () {
    calculatePower()
    //@highlight
    if (power > 0.3) {
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        fwdMotors.setAngle(fwdBase.leftServo, fwdMotors.getAngle(fwdBase.leftServo) + 10)
        if (fwdMotors.getAngle(fwdBase.leftServo) > 180) {
            fwdMotors.setAngle(fwdBase.leftServo, 0)
        }
    }
})
```

## Étape 8

Mais c'est quoi, la « puissance » ? Dans la leçon, nous avons vu que la puissance est le rythme auquel la tension et le courant fournissent un travail. Dans notre programme, nous calculons la `||variables:power||` dans une **fonction** appelée `||functions:calculatePower||`.

~hint Dis-m'en plus !

-   Les **fonctions** sont des blocs de code qui accomplissent une tâche précise. Elles aident à garder notre code plus organisé et réutilisable.

-   La fonction `||functions:calculatePower||` lit la `||fwdSensors:voltage (V)||` et le `||fwdSensors:current (mA)||` du capteur d'énergie.

-   Elle convertit ensuite la lecture du `||fwdSensors:current (mA)||` de milliampères en ampères en divisant `||fwdSensors:current (mA)||` par 1000.

-   Enfin, `||variables:current_Amps||` et `||fwdSensors:voltage (V)||` sont multipliés ensemble pour obtenir la valeur de `||variables:power||` en watts.

hint~

```blocks
function calculatePower () {
    current_Amps = fwdSensors.current1.current() / 1000
    power = current_Amps * fwdSensors.voltage1.voltage()
}
```

## Étape 9

Observe les nombres de **tension** et de **courant** qui apparaissent dans le simulateur pendant que ton panneau balaie ou scanne une zone. Que remarques-tu à propos des valeurs quand le panneau fait face au mur ? Et quand il fait face à une fenêtre ou à une source de lumière ?

~hint Dis-m'en plus !

-   Les deux nombres augmentent quand le panneau solaire s'approche d'une source de lumière, ce qui indique une augmentation de la puissance.

hint~

![GIF des simulateurs](https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/ms-solartracking/energysensor-simulator-demo.gif)

## Étape 10

Quelles sont les forces de cet algorithme de balayage tout simple ?

~hint Dis-m'en plus !

L'algorithme de balayage est simple. Le panneau solaire scanne une bonne plage et s'arrête sur une position qui atteint le _seuil minimum_ défini dans l'instruction conditionnelle.

hint~

## Étape 11

Quelles sont les faiblesses de cet algorithme, ou les choses qu'il ne fait pas très bien ?

~hint Dis-m'en plus !

Cet algorithme ne cherche pas forcément la _meilleure_ position ni la plus _lumineuse_. Il scanne, mais s'arrête _dès qu'il atteint le seuil minimum_, même s'il y a un endroit plus lumineux à quelques degrés de là. De même, s'il n'y a aucun endroit qui atteint le seuil, il scannera pour toujours, ce qui n'est pas très efficace !

hint~

## Réflexion

Avant de terminer :

-   Nomme 2 nouvelles choses que tu as apprises aujourd'hui.
-   Quelle est une chose que tu aimerais approfondir ?

## Terminé

Clique sur le bouton `|Terminé|` pour finir ce tutoriel.
