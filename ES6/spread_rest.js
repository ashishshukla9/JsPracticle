// ...spread/rest
// spread ka matlab hai element ke saare values ko us jagah par bikher dena
// spread use hota h copy ya fir us location par kisi aur ki values bikherne k liye.
// spread start
var a = [1,2,3,4,5,6,7,8,9,10]
var b = [...a];
console.log(b);

// rest start
// rest use hota h jab aapko bache huye values ek variable main daalne ho

function rest (a,b,c,...d){
    console.log(a,b,c,d)
}
rest(1,2,3,4,5,6);