# Tutoriel du moniteur de courant - Forward Education
```package
fwd-smart-solar=github:Forward-Education/pxt-smart-solar#v1.2.0
```

## Tutoriel du moniteur de courant @showdialog
Aujourd'hui, tu vas coder un moniteur qui mesure le courant (le flux d'électricité) généré par ton panneau solaire. Tu vas ensuite convertir cette mesure en affichage visuel sur ton micro:bit, pour voir en temps réel combien d'électricité circule !

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/projects/current-monitor/render.png" alt="Rendu du panneau solaire avec moniteur de courant" style="display: block; width: 100%; margin:auto;">

## Étape 1 @showdialog
IMPORTANT ! Assure-toi que ta plaque de connexion est allumée et que ton micro:bit est branché à ton ordinateur.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/general-assets/pluganim.webp" alt="Brancher le micro:bit au port USB de l'ordinateur" style="display: block; width: 40%; margin:auto;">

## Étape 2 @showdialog
Clique sur les trois points à côté du bouton `|Télécharger|`, puis clique sur _Connecter l'appareil_.
Ensuite, suis les étapes pour coupler ton micro:bit.

<img src="https://raw.githubusercontent.com/Forward-Education/pxt-smart-solar/main/curriculum/general-assets/pairmicrobitGIF.webp"  alt="Gif de couplage" style="display: block; width: 60%; margin:auto;">

## Étape 3
Nous voulons que notre micro:bit vérifie le courant en continu. Nous allons utiliser une **boucle** pour cela. 

Glisse une boucle `||Loops:every 500 ms||` de la catégorie `||Loops:Loops||` dans l'espace de travail.

~hint Dis-m'en plus !
- Une boucle est une séquence d'instructions qui se répète continuellement jusqu'à ce qu'une certaine condition soit remplie. Pense à un ensemble d'instructions que tu demandes à ton micro:bit de faire encore et encore.
hint~

```blocks
loops.everyInterval(500, function () {
	
})
```

## Étape 4
Ensuite, nous aurons besoin d'une **instruction conditionnelle** pour vérifier la valeur du courant et afficher un motif spécifique.

Depuis la catégorie `||Logic:Logic||`, glisse un bloc `||Logic:if then else||` dans l'espace de travail. 

~hint Dis-m'en plus !
- Une instruction conditionnelle (souvent appelée « si-alors-sinon ») est un concept fondamental en programmation qui permet à ton code de _prendre des décisions_. C'est comme dire à ton micro:bit : « SI cette condition est vraie, ALORS fais ceci. »
- Nous utilisons aussi des instructions conditionnelles dans la vraie vie ! Par exemple, s'il pleut, alors j'apporte mon parapluie ! 
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
Notre première condition sera pour un **courant inexistant ou _très_ faible**. Nous voulons que le code dise :

**SI** le courant est faible (moins de 0,1 mA), **ALORS** affiche un « X » sur l'écran du micro:bit. Comment pourrions-nous faire cela ? 

## Étape 6
Glisse un bloc `||fwdSensors:current is over 0 mA ||` dans la première partie de l'instruction conditionnelle (aussi appelée l'« hypothèse »). Change **over** en **under** dans le menu déroulant. Ensuite, change **0** en **0.1 mA**.

```blocks
loops.everyInterval(500, function () {
    // @highlight
    if (fwdSensors.current1.isPastThreshold(0.1, fwdEnums.OverUnder.Under)) {
        
    } else {
    
    }
})
```

## Étape 7
Glisse un bloc `||Basic:show icon||` dans la conclusion de l'instruction conditionnelle, pour qu'elle dise :

**ALORS** affiche un « X » sur l'écran du micro:bit.

```blocks
loops.everyInterval(500, function () {
    if (fwdSensors.current1.isPastThreshold(0.1, fwdEnums.OverUnder.Under)) {
        // @highlight
        basic.showIcon(IconNames.No)
    } else {
        
    }
})
```

## Étape 8
Clique sur l'icône « + » au bas de la conditionnelle pour créer 1 nouvelle instruction `||logic:else if||`.

```blocks
loops.everyInterval(500, function () {
    // @highlight
    if (fwdSensors.current1.isPastThreshold(0.1, fwdEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    } else if (false) {
    	    	
    } else {
    	
    }
})
```

## Étape 9
Maintenant, nous devons créer un affichage pour quand le panneau solaire génère un _courant de force moyenne_. 

Fais un clic droit sur la première hypothèse et choisis « Dupliquer ». Glisse cette nouvelle hypothèse dans la deuxième instruction conditionnelle. Change 0,1 mA en 40 mA.

```blocks
loops.everyInterval(500, function () {
    // @highlight
    if (fwdSensors.current1.isPastThreshold(0.1, fwdEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    } else if (fwdSensors.current1.isPastThreshold(40, fwdEnums.OverUnder.Under)) {
        
    } else {
       
    }
})
```

## Étape 10
Glisse un bloc `||Basic:show LEDs||` dans la conclusion de la deuxième instruction conditionnelle. Fais allumer neuf LED sur l'écran du micro:bit. Cela indiquera un courant de force moyenne.   

~hint Dis-m'en plus !
- Souviens-toi, les LED sont une représentation visuelle de la force du courant.
- Regarde l'indice de l'ampoule pour voir comment nous l'avons résolu, mais n'hésite pas à être créatif avec tes affichages !
hint~

```blocks
loops.everyInterval(500, function () {
    if (fwdSensors.current1.isPastThreshold(0.1, fwdEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    } else if (fwdSensors.current1.isPastThreshold(40, fwdEnums.OverUnder.Under)) {
        // @highlight
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else {
        
    }
})
```

## Étape 11
Glisse un bloc `||basic:show LEDs||` dans la dernière condition `||logic:else||`. Fais allumer vingt-trois LED sur l'écran du micro:bit dans ce cas. Cela représentera un scénario de courant « élevé ».

```blocks
loops.everyInterval(500, function () {
    if (fwdSensors.current1.isPastThreshold(0.1, fwdEnums.OverUnder.Under)) {
        basic.showIcon(IconNames.No)
    } else if (fwdSensors.current1.isPastThreshold(40, fwdEnums.OverUnder.Under)) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else {
        // @highlight
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
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
