const prompt = require("prompt-sync")();
let name = prompt("Enter your name : ");
console.log("Lowercase = " + name.toLowerCase());
console.log("Upper Case = " + name.toUpperCase());
name[1] = name[1].toUpperCase();
var len = name.length;
let index = 0;
for(let i = 0; i < len; i++)
{
    if(name.indexOf(' ') > 0)
    {
        index = name.indexOf(' ');
        i = len + 1;
    }
}
name[index+1] = name[index+1].toUpperCase();
console.log("Title case = " + name);
