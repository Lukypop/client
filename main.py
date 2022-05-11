#kód se podobá kódu od Fandy, protože jsem si řekl o pomoc a kód psal na stejné bázi, ale přiučil jsem se tím ta radia, která mi nešla
radio.set_group(69)
radio.set_transmit_power(7)
radio.set_transmit_serial_number(True)

input.on_button_pressed(Button.A, ChangeVoteDown)
input.on_button_pressed(Button.B, ChangeVoteUp)
input.on_button_pressed(Button.AB, SendVote)

enabled = 0
vote = 3

def ChangeVoteDown():
    global vote
    vote = Math.constrain(vote, 2, 5)
    vote -= 1 
    basic.show_string(String.from_char_code(vote + 64))

def ChangeVoteUp():
    global vote
    vote = Math.constrain(vote, 2, 5)
    vote += 1
    basic.show_string(String.from_char_code(vote + 64))

def SendVote():
    if enabled == 1:
        radio.send_value("vote", vote)

def recieved(name, value):
    global enabled
    if name == "enabled":
        if value == 1: 
            enabled = 1
        if value == 0: 
            enabled = 0
radio.on_received_value(recieved)