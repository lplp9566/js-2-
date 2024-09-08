//1
function  number(num,bol){
    if (bol){
        console.log("-".repeat(num)+">")
    }
    else{
        console.log("-".repeat(num)+"<")
    }
}
console.log(number(5,false))
//2
function Arrangement(num){
    let input = parseInt(prompt("enter"))
    let arr = []
    while (input !==0){
        arr.push(input)
        
    }
    console.log(arr.length())
}
