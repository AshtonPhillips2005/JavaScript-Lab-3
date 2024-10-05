let numbersAndStuff = [50, "Toy", 25, "Chair", 70];
console.log(numbersAndStuff);

let firstElement = numbersAndStuff[0];
let lastElement = numbersAndStuff[numbersAndStuff.length - 1];
let middleElement2 = Math.floor(numbersAndStuff.length / 2);
let middleElement = numbersAndStuff[middleElement2];

console.log(firstElement);
console.log(lastElement);
console.log(middleElement);

let numberOfArrays = numbersAndStuff.length;

console.log(numberOfArrays);

numbersAndStuff.push("Banana");
console.log(numbersAndStuff);

let removedElement = numbersAndStuff.pop();
console.log(numbersAndStuff);

numbersAndStuff.splice(1, 1, "Table");
console.log(numbersAndStuff);

for(let i = 0; i < numbersAndStuff.length; i++) {
    console.log(numbersAndStuff[i]);
}

numbersAndStuff.forEach((element)=>{
    console.log(element);
});

let [oneElement, TwoElement, ...restElement] = numbersAndStuff;
console.log(oneElement);
console.log(TwoElement);
console.log(restElement);