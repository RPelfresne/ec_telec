input.onButtonPressed(Button.A, function () {
    _bouton = "A"
})
radio.onReceivedString(function (receivedString) {
    msg = receivedString
})
input.onButtonPressed(Button.B, function () {
    _bouton = "B"
})
let msg_lu = ""
let etat = 0
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
    etat = etat_suivant
    msg_lu = msg
    if (etat == 1) {
        radio.sendString("B")
        basic.showString("B")
        basic.pause(100)
    } else if (etat == 2) {
        basic.showString("RO")
    } else if (etat == 3) {
        basic.showString("RO")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (etat == 4) {
        radio.sendString("SR")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (etat == 5) {
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
        if (msg_lu == "FLR") {
            etat_suivant = 3
        }
    } else if (etat == 3) {
        if (_bouton == "A") {
            _bouton = " "
            etat_suivant = 4
        }
    } else if (etat == 4) {
        if (_bouton == "A") {
            _bouton = " "
            etat_suivant = 5
        }
    }
})
