console.log("advance javascript class 02")

var state = "pakistan";
var state = "island";
// this is a problem

// so i use that  let
let city = "karachi"
// let city = "karachi" //error

// const is a constant value
const houseNumber = "#1657 sector 71/D"

// var is a function scope variable
// let and const is a block scope variable

function mydata(){
    console.log("my data is not null")
}

// arrow fnc
const myDta = (pera1,pera2)=>{
    console.log("my data is not undefine")    
    return pera1 + pera2
}
var value = myDta(20,1)
console.log(value)

const sameData = () => 
    `${ tayer = {
        name: "hussain",
        age: 25
    },
console.log("tayar", tayer.name )
}`
sameData()

// ternary operator = `back tick`
// spread operator = ... three dots

// copy array in spread operator
var copyArrayRefrence = [1,2,3,4,5,6,7];
var doubleCopy = [...copyArrayRefrence];
console.log(doubleCopy)


// copy obj in spread operator
var realObject = {
    name: "hussain",
    age:17,
    class:11
};

var copyObject = {...realObject};
console.log(copyObject)

