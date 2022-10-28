let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// join
// console.log(fruits.join());
// console.log(fruits.join('--'));

// // push
// fruits.push('Kiwi'); //push a string on to the array
// console.log(fruits.join());
// fruits.push(['Strawberry', 'Blueberry']); //push an array onto an array
// console.log(fruits.join());
// fruits.push(5);
// console.log(fruits.join());

// console.log(JSON.stringify(fruits));

// // pop
// console.log(fruits.pop()); //pop removes the last element
// console.log(fruits.join());

// shift
// console.log(fruits.join());
// console.log(fruits.shift()); //shift returns what it gets rid of, takes off the first element
// console.log(fruits.join());

// // unshift
// console.log(fruits.unshift('Potato')); //unshift adds a first element
// console.log(fruits.join());

// concat
// fruits = fruits.concat(['Strawberry', 'Blueberry']); //joins the array, and then we have reassigned it to fruits
// console.log(JSON.stringify(fruits));

// slice
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3); //start at one and return the ones after that including end like (1,3] closed, open not 1, but 2 and 3
console.log(citrus);
console.log(fruits);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(1, 3);


// splice
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // what the numbers mean: splice(where is it going to go, how many to remove, what to insert)
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple", "Cherry"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);