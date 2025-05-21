input.onButtonPressed(Button.A, function () {
    if (etat == 1) {
        radio.sendString("R")
        etat = 2
        basic.showString("R")
    } else if (etat == 2) {
        radio.sendString("S")
        etat = 3
        basic.showString("S")
    } else if (etat == 3) {
        radio.sendString("A")
        etat = 4
        basic.showString("A")
    }
})
input.onButtonPressed(Button.B, function () {
    if (etat == 0) {
        radio.sendString("B")
        etat = 1
        basic.showString("B")
    }
})
let etat = 0
radio.setGroup(1)
basic.showIcon(IconNames.Pitchfork)
etat = 0
