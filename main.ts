// kód se podobá kódu od Fandy, protože jsem si řekl o pomoc a kód psal na stejné bázi, ale přiučil jsem se tím ta radia, která mi nešla
radio.setGroup(69)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
input.onButtonPressed(Button.A, function ChangeVoteDown() {
    
    vote = Math.constrain(vote, 2, 5)
    vote -= 1
    basic.showString(String.fromCharCode(vote + 64))
})
input.onButtonPressed(Button.B, function ChangeVoteUp() {
    
    vote = Math.constrain(vote, 2, 5)
    vote += 1
    basic.showString(String.fromCharCode(vote + 64))
})
input.onButtonPressed(Button.AB, function SendVote() {
    if (enabled == 1) {
        radio.sendValue("vote", vote)
    }
    
})
let enabled = 0
let vote = 3
radio.onReceivedValue(function recieved(name: string, value: number) {
    
    if (name == "enabled") {
        if (value == 1) {
            enabled = 1
        }
        
        if (value == 0) {
            enabled = 0
        }
        
    }
    
})
