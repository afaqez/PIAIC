const arr = ["Elon Musk", "Sunny Ali" , "Future me"]
console.log("We have capacity of more people at the table!")
arr.splice(0, 0, "Imran Khan");
arr.splice(2, 0, "Nawaz Sharif")
arr.splice(5, 0, "Albert Einstein")
var check = arr.map(display)
function display(arr)
{
    console.log("Hello " + arr + ", You are invited to dinner")
}
