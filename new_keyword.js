// jab bhi new lagta h humesha ek blank object apne man mein bana lo {}
// jab aap new keyword k saath kisi function ko call karte hain toh, to ek naya object create hota h

function abcd() {
    this.age = 12;
}
new abcd()
{
    age: 12;
}