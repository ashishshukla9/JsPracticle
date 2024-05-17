// user will ask for a number between 0 se 9 and if the number is below 5 resolve if not reject
// Math.random - ye function 0 se 1 k beech ek random number genrate karta h, 
// syntax - var randomNumber = Math.random();

// Math.floor - ye function ek number ko uske nearest integer se neeche floor kar deta hai. 
// var randomInteger =Math.floor(Math.random() *10);
var data = new Promise((res, rej) => {  //Promise is constructor function thats why using new
    var n = Math.random(Math.floor() * 10);
    if (n < 5) {
        result(res)
    } else {
        result(rej)
    }
})

data.then(function () {
    console.log("Below")
})
    .catch(function () {
        console.log("Above")
    })


// sabse pehle ghar par jaao
// gate kholo aur gate lagao
// khana pakao kahana khao
// incongito mode chalao
// sojao kyunki tum thak gaye ho

var set = new Promise((res, rej) => {
    return res("sabse pehle ghar par jaao")
});
var p2 = set.then(function (data) {
    console.log(data);
    return new Promise((res, rej) => {
        return res("gate kholo aur gate lagao");
    });

})
var p3 = p2.then(function (data) {
    console.log(data)
    return new Promise((res, rej) => {
        return res("khana pakao kahana khao");
    })
});
p3.then(function (data) {
    console.log(data)
    return new Promise((res, rej) => {
        return res("incongito mode chalao");
    })
})