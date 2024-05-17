// koi bhi aisa function jisme aap async code likhenge, kyonki async code hai to aap promises ka istemaal kar sakte hai, jab uska answer aayega aapko then lagana padega, us then ko lagane se bachne k liye aap async await ka istemaal kar sakte hai.

async function abcd() {
    let raw = await fetch('API KEY ENTER HERE');
    let ans = await raw.json()
    console.log(ans);
}
abcd();   