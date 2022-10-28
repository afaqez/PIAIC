let arr = ["Elon Musk", "Sunny Ali" , "Future me"]
console.log("We are running short on time and we have to only invite 2 people now.")
arr.splice(0, 0, "Imran Khan");
arr.splice(2, 0, "Nawaz Sharif")
arr.splice(5, 0, "Albert Einstein")
var len = arr.length
for(let i = 0; i < len - 2; i++)
{
    console.log("Sorry " + arr[i] + ", you are not invited")
    arr.pop()
}
len = arr.length
{
    for(let i = 0; i < len; i++)
    {
        console.log(arr[i] + ", you are still invited")
        arr.pop();
    }
}