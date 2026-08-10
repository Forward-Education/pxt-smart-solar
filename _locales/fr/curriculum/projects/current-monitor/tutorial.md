# Tutoriel Moniteur de courant - Forward Education
```package
fwd-smart-solar=github:Forward-Education/pxt-smart-solar#v1.2.0
```

## Tutoriel Moniteur de courant @showdialog
Aujourd'hui, tu vas coder un moniteur qui mesure le courant (le flux d'électricité) généré par ton panneau solaire. Tu convertiras ensuite cette mesure en un affichage visuel sur ton micro:bit, qui te montrera en temps réel combien d'électricité circule !

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/projects/current-monitor/render.png" alt="Rendu du panneau solaire avec moniteur de courant" style="display: block; width: 100%; margin:auto;">

## Étape 1 @showdialog
IMPORTANT ! Assure-toi que la plaque de connexion de ton kit d'Action pour le Climat est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/general-assets/pluganim.webp" alt="Branche le micro:bit dans le port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape 2 @showdialog
Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/general-assets/pairmicrobitGIF.webp"  alt="GIF de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3
Nous voulons que notre micro:bit vérifie le courant en permanence. Pour cela, nous utiliserons une **boucle**.

Fais glisser une boucle `||Loops:every 500 ms||` du tiroir `||Loops:Loops||` dans l'espace de travail.

~hint Dis-m'en plus !
- Une boucle est une séquence d'instructions qui se répète sans arrêt jusqu'à ce qu'une certaine condition soit remplie. C'est comme un ensemble d'instructions que tu demandes à ton micro:bit de faire encore et encore.
hint~

```blocks
loops.everyInterval(500, function () {
	
})
```

## Étape 4
Ensuite, nous aurons besoin d'une **instruction conditionnelle** pour vérifier la valeur du courant et afficher un motif précis.

Depuis le tiroir `||Logic:Logic||`, fais glisser un bloc `||Logic:if then else||` dans l'espace de travail.

~hint Dis-m'en plus !

- Une instruction conditionnelle (souvent appelée « si-alors-sinon ») est un concept fondamental en programmation qui permet à ton code de _prendre des décisions_. C'est comme dire à ton micro:bit : « SI cette condition est vraie, ALORS fais ceci. »

- Nous utilisons aussi des instructions conditionnelles pour prendre des décisions dans la vraie vie ! Par exemple, s'il pleut, alors j'apporte mon parapluie !

hint~

```blocks
loops.everyInterval(500, function () {
    // @highlight
    if (true) {
    	
    } else {
    	
    }
})

```

## Étape 5
Notre première condition sera pour un **courant faible**. Nous voulons que le code dise :

**SI** le courant est faible (entre 5 mA et 20 mA), **ALORS** allume une seule LED sur l'écran du micro:bit.

## Étape 6
Fais glisser les blocs suivants dans l'espace de travail :

- deux blocs d'opérateur de comparaison `||Logic:0 < 0||`
- un bloc d'opérateur booléen `||Logic:AND||`
- deux blocs rapporteurs `||fwdSensors:current (mA)||`

## Étape 7
Combine les blocs pour écrire la première partie de l'instruction conditionnelle (aussi appelée l'« hypothèse ») pour qu'elle dise :

**SI** le courant est supérieur à 5 mA ET inférieur ou égal à 20 mA...

```blocks
loops.everyInterval(500, function () {
    // @highlight
    if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
    	
    } else {
    	
    }
})
```

## Étape 8
Fais glisser un bloc `||Basic:show LEDs||` dans la conclusion de l'instruction conditionnelle, pour qu'elle dise :

**ALORS** affiche une seule LED sur l'écran du micro:bit.

```blocks
loops.everyInterval(500, function () {
    if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else {
    	
    }
})
```

## Étape 9
Clique sur l'icône « + » en bas de la conditionnelle pour créer 4 nouvelles instructions `||logic:else if||`.

```blocks
loops.everyInterval(500, function () {
    // @highlight
    if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else if (false) {
    	
    } else {
    	
    }
})
```

## Étape 10
Fais un clic droit sur la première hypothèse et sélectionne « Dupliquer ». Fais glisser cette nouvelle hypothèse dans la deuxième instruction conditionnelle.

Répète pour chaque conditionnelle vide.

```blocks
loops.everyInterval(500, function () {
    // @highlight
    if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
    	
    } else if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
    	
    } else if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
    	
    } else if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
    	
    } else {
    	
    }
})
```

## Étape 11
Modifie les valeurs de chaque hypothèse pour obtenir :
- **SI** le courant est supérieur à 20 mA _et_ inférieur ou égal à 40 mA...
- **SI** le courant est supérieur à 40 mA _et_ inférieur ou égal à 60 mA...
- **SI** le courant est supérieur à 60 mA _et_ inférieur ou égal à 80 mA...
- **SI** le courant est supérieur à 80 mA...

```blocks
loops.everyInterval(500, function () {
    // @highlight
    if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (fwdSensors.current1.current() > 20 && fwdSensors.current1.current() <= 40) {
    	
    } else if (fwdSensors.current1.current() > 40 && fwdSensors.current1.current() <= 60) {
    	
    } else if (fwdSensors.current1.current() > 60 && fwdSensors.current1.current() <= 80) {
    	
    } else if (fwdSensors.current1.current() > 80) {
    	
    } else {
    	
    }
})
```

## Étape 12
Fais un clic droit sur le bloc `||Basic:show LEDs||` de la première conditionnelle et sélectionne « Dupliquer ». Fais glisser ce nouveau bloc dans la conclusion de la deuxième instruction conditionnelle.

Répète pour chaque conditionnelle vide.

```blocks
loops.everyInterval(500, function () {
    if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (fwdSensors.current1.current() > 20 && fwdSensors.current1.current() <= 40) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (fwdSensors.current1.current() > 40 && fwdSensors.current1.current() <= 60) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (fwdSensors.current1.current() > 60 && fwdSensors.current1.current() <= 80) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (fwdSensors.current1.current() > 80) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else {
    	
    }
})
```

## Étape 13
Personnalise les blocs d'affichage LED pour que chaque conclusion dise :
- **SI** le courant est supérieur à 20 mA et inférieur ou égal à 40 mA, **ALORS** allume neuf LED sur l'écran du micro:bit.
- **SI** le courant est supérieur à 40 mA et inférieur ou égal à 60 mA, **ALORS** allume quatorze LED sur l'écran du micro:bit.
- **SI** le courant est supérieur à 60 mA et inférieur ou égal à 80 mA, **ALORS** allume dix-neuf LED sur l'écran du micro:bit.
- **SI** le courant est supérieur à 80 mA, **ALORS** allume vingt-trois LED sur l'écran du micro:bit.

~hint Dis-m'en plus !
- Souviens-toi, les LED sont une représentation visuelle de la force du courant.
- Regarde l'indice de l'ampoule pour voir comment nous avons résolu cela, mais n'hésite pas à être créatif avec tes affichages !
hint~

```blocks
loops.everyInterval(500, function () {
    if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (fwdSensors.current1.current() > 20 && fwdSensors.current1.current() <= 40) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else if (fwdSensors.current1.current() > 40 && fwdSensors.current1.current() <= 60) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
    } else if (fwdSensors.current1.current() > 60 && fwdSensors.current1.current() <= 80) {
        // @highlight
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (fwdSensors.current1.current() > 80) {
        // @highlight
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
    	
    }
})
```

## Étape 14
Fais glisser un bloc `||basic:show icon||` dans la condition finale `||logic:else||`. Change le cœur en « X » pour signaler qu'il n'y a pas de courant !

```blocks
loops.everyInterval(500, function () {
    if (fwdSensors.current1.current() > 5 && fwdSensors.current1.current() <= 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
    } else if (fwdSensors.current1.current() > 20 && fwdSensors.current1.current() <= 40) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else if (fwdSensors.current1.current() > 40 && fwdSensors.current1.current() <= 60) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            `)
    } else if (fwdSensors.current1.current() > 60 && fwdSensors.current1.current() <= 80) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (fwdSensors.current1.current() > 80) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        // @highlight
        basic.showIcon(IconNames.No)
    }
})
```

## Téléchargement
Clique sur le bouton `|Télécharger|` pour télécharger le code sur ton projet de panneau solaire et le tester !

## Réflexion
Avant de terminer :
- Nomme 2 nouvelles choses que tu as apprises aujourd'hui.
- Quelle est une chose que tu aimerais approfondir ?

## Terminé
Clique sur le bouton `|Terminé|` pour finir ce tutoriel.
