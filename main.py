def on_button_pressed_a():
    global etat
    if etat == 1:
        radio.send_string("R")
        etat = 2
        basic.show_string("R")
    elif etat == 2:
        radio.send_string("S")
        etat = 3
        basic.show_string("S")
    elif etat == 3:
        radio.send_string("A")
        etat = 4
        basic.show_string("A")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global etat
    if etat == 0:
        radio.send_string("B")
        etat = 1
        basic.show_string("B")
input.on_button_pressed(Button.B, on_button_pressed_b)

etat = 0
radio.set_group(1)
basic.show_icon(IconNames.GIRAFFE)
etat = 0