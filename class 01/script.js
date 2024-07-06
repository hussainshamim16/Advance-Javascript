


// Es 5 
// 2015 sey pehly ka javascript ES 5 kehlata hey basic jitny bhi paraha vo 
// es 5 tha

//Es 6
// 2015 key baad vala js ES 6 kehlata hey

// var is a es 5 feature
// let const es 6 feature

// function is a es 5 feature
// Arrow fnc es 6 feature

var firstName = "Hussain"
console.log(firstName)
var firstName = "shamim"
console.log(firstName) // this is problem

let secondName = "ali"
// let secondName = "shamim" // Eror
secondName = "ali rehman"
console.log(secondName)

const third = "rehman Bhutto" // this is a constant variable 
console.log(third)


function normalFnc(){
    // block of statement
}

const ArrowFnc = ()=>{
    // block of state ment
}

// return value in arrow fnc
const ret = ()=>6+1;
console.log(ret())

// mager diffrent in fnc
//                                  This Key word
const ke = ()=>{
    console.log(this) // ye hamesah global window dekhay ga
}

const studentObj = {
    name:"ali",
    age:"17",
    course: ()=>{
        console.log(this)
    }
}

const {name,age, course} = studentObj

console.log(name)

