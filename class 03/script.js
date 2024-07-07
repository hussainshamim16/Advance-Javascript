/// array method

//find findindex filter map foreach

find 
// find one value of an array Example
let arrFind = [1,2,3,4,5];
console.log(arrFind)

let findArray = arrFind.find((value , index)=>{
    // console.log("value",value,"index",index)
    if(value === 3){
        console.log("i have value index",index)
        return true
    }
})
console.log(findArray);

///findindex 
/* ye bilokol ap find jesa kaam kar kar dey ga but
 vo value deta tha ye aap ko index numer dy ga */

 let findIndex = ["hussain","shamim","jaweed","uddin"];

let indexFind = findIndex.findIndex((value , index)=>{
    
    // console.log("find value",findIndex[index])
    console.log("find value",value)
    if(value === "jaweed"){
        return index
    }
})
console.log(indexFind);

// array or obj with obj

let obj1 = {
    name:"hussain"
}
let obj2 = {
    name:"hussain"
}

console.log(obj1 === obj2) // answer is false

// object kabhibhi appas mey macth nhi karen gey


// map()
/* maap hammary bohot jaga kaam aata hy ye array key oper 
alternet chalta hy or hammay aike new array deta hey jo hamm array key 
opper editing karty hen os ka example;;; */
let Tableleght = [1,2,3,4,5,6,7,8,9,10]
var table = Tableleght.map((value,index)=>{
    return value*7
    
})
console.log("table 7",table)

// filter()
// ye values ko filter kar key apki array valuse ko dhoondth hey
// ayasa find bhi karta hey maggar vo serif aike value ko dhondta hey

let studentName = ["ali","ahmed","tahir","rehman","jaweed","ahmed","hussain","shamim","ahmed"]
// console.log(studentName)
let callingStd = studentName.filter((value,index)=>{
    // console.log("come here", value)
    if(value === "ahmed"){
        return value
    }
})

console.log(callingStd)

// for each
/* ye bilkol for loop ke tarha kaam krta
 hey ba sthor sente allag hey  */
 let Nmber = 6;
let Loping = [1,2,3,4,5,6,7,8,9,10]
let loper = Loping.forEach((value, index)=>{
    // console.log("hussain", index,value)
    // if(index === value){
        console.log(Nmber," x ",index += 1," = ",value*Nmber)

    // }
})
 console.log(Loping)