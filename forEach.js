// forEach loop sirf, array pe chalta h matlab ki jab bhi tumhaare pass ek array ho, tab use mein kaun aata h foreach loop

// foreach kabhi bhi by default aapke aaray mein change nhi karta wo aapko changes karke deta hai aaray ki temporary copy par jiske wajah se aaray humesha same rehta h

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
a.forEach(function (val) {
    console.log(val + 3)
})