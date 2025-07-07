input.onButtonPressed(Button.A, function () {
    _bouton = "A"
})
radio.onReceivedString(function (receivedString) {
    msg = receivedString
})
input.onButtonPressed(Button.B, function () {
    _bouton = "B"
})
let etat = 0
let msg_lu = ""
let msg = ""
let _bouton = ""
radio.setGroup(1)
basic.showLeds(`
    # . # . .
    # . . # .
    # # # # #
    # . . # .
    # . # . .
    `)
let etat_suivant = 0
basic.forever(function () {
    msg_lu = " "
    etat = etat_suivant
    msg_lu = msg
    msg = " "
    if (etat == 1) {
        radio.sendString("B")
        basic.showString("B")
    } else if (etat == 2) {
        basic.showString("R?")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (etat == 3) {
        radio.sendString("LR")
        basic.showString("LR")
    } else if (etat == 4) {
        basic.showString("R")
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . # .
            . . . . #
            `)
    } else if (etat == 5) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (etat == 6) {
        radio.sendString("SR")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (etat == 7) {
        radio.sendString("A")
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
    if (etat == 0) {
        if (_bouton == "B") {
            _bouton = " "
            basic.showLeds(`
                . . . . .
                . . # . .
                . # # # .
                . . # . .
                . . . . .
                `)
            etat_suivant = 1
        }
    } else if (etat == 1) {
        if (msg_lu == "FB") {
            etat_suivant = 2
        }
    } else if (etat == 2) {
        if (_bouton == "A") {
            _bouton = " "
            etat_suivant = 3
        }
    } else if (etat == 3) {
        if (msg_lu == "DR") {
            etat_suivant = 4
        }
    } else if (etat == 4) {
        if (msg_lu == "FLR") {
            etat_suivant = 5
        }
    } else if (etat == 5) {
        if (_bouton == "A") {
            _bouton = " "
            etat_suivant = 6
        }
    } else if (etat == 6) {
        if (_bouton == "A") {
            _bouton = " "
            etat_suivant = 7
        }
    }
})
