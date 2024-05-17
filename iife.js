// IIFE Immediately Invoked Function Expression

// iife hai function ko turant chalane ki kala is tareeke se ki hum log koi private variable bana paaye


var ans = (function(){
    var privateval = 12;
    return{
        getter:function(){
            console.log(privateval);
        },
        setter:function(){
            privateval = val;
        }
    }
})();