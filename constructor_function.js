// normal function jismein this ka istemaal ho and aap function ko call karte waqt new keyword ka use karein.
// function me jab bhi hum this use karte h to wo by default wo window hota h

// jab aapke paas aisa koi mauka hho ke aapko ek jaisi properties waale bahut saare elements banane hai us waqt aap constructor function use kar sakte ho.

function curcularButton(color){
    this.color = color;
    this.radius = 2;
    this.icon = true;
    this.pressable = true;
}
var redbutton = new curcularButton("red");