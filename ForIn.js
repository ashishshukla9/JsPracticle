// objects par loop karne k liye hota h forin loop


var obj = { Name: 'Ashish', age: 29, city: 'Mumbai', state: 'Maharastra' }
for (var key in obj) {
    console.log(key + ":", obj[key])
}