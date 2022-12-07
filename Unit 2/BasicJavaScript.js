//let is very similar to how java works (obeys scope and cannot redeclare)
let greeting = 'Hello';
function test(){
if(true){
    let greeting = 'Hi';
}
}

console.log(greeting);

const TEST_VALUE = 6;
//TEST_VALUE = 5;

// == vs ===
//=== checks the value and the type

/*console.log(1 == '1'); //true //0 is false, 1 is true in binary which is why the third one works
console.log(1 === '1'); //false
console.log(1 == true); //true
console.log(1 === true); //false

console.log(typeof(1));
console.log(typeof(true));*/

//!== compares values and type and ensure that they are not the same

let number1 = 6;
let number2 = 7;
let sum = number1+number2;

/*const result = number1 + " + " + number2 + " = " + sum;
console.log(result);

const result2 = `${number1} + ${number2} = ${sum}`;
console.log(result2);*/

function addTwo(x){
    return x+2;
}

console.log(addTwo(5));

//function add(x,y,z=0){
    //addtion
    /*if(z=== undefined){
        z=0;
    }
*/
    //return x + y + ((typeof(z) === 'undefined') ? 0 : z);

//}
//console.log(add(1,2,3));
//console.log(add(1,2)); //we gave z a default value, if there is no z, it will just put in the default value, if you take off the default value for z and run this, you will get NaN, or you can add the addition we made to the fun't

//let num = 7;
//console.log(num%2==0?'even':'odd'); //console.log -> if num%2==0, then print what is written here if it is true: print what is written here if it is false
//condition ? true:false

for (let index = 0; index < 7; index++) {
    console.log(index);
}

//Arrays
//for...of iterates over property values

// const colours = ['red', 'yellow', 'green', 'blue'];
// for(const colour of colours){ //for(const iterator of object){
//     console.log(colour);
// }

// //for ...in iterates over property names
// const car = {make: 'Ford', model:'Mustang'};
// for(const prop in car){
//     console.log(`${prop}: ${car[prop]}`);
// }

// console.log(car.make); //key.value
// console.log(car['make']);

/*"rooms": [
    {
      "id": "South of the Cyan House",
      "name": "South of the Cyan House",
      "description": "You find yourself south of a Cyan House, weathered by constant winds.",
      "exits": [
        {
          "isLocked": false,
          "direction": "East",
          "adjacentRoom": "East of the Cyan House"
        },
        {
          "isLocked": false,
          "direction": "West",
          "adjacentRoom": "West of the Cyan House"
        }
      ]
    }*/
/*
for (const prop in room){
    if(prop !== 'exits'){
        console.log(`${prop}: ${room[prop]}`);
    }else{
        console.log('Room:\n');/
        for(const exit of room[prop]){
            for(const exitProp in exit){
                console.log(`${exitProp}`)
            }
        }/**COPY REST OF CODE FROM DELO'S GITHUB!!!!!!!! 
    }
}*/






