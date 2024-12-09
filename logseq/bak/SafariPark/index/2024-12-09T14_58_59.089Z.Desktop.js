import { Person } from "./person.js";
import { Vehicle } from "./vehicle.js";
import { Hunter } from "./hunter.js";
import { Airplane } from "./ariplane.js";
//Variables and Methods in camelCase
//Class names in PascalCase
let matt = new Person("Matt", "Szyndler", 21);

let v1 = new Vehicle(4, 40, 20);

// console.log(v1.position); // Outputs: 20
// console.log(v1.move(2)); // Outputs: "Moving along 2 times"
// console.log(v1.position); // Outputs: 100
// console.log(v1.capacity); // Outputs: 4
// console.log(v1.setCapacity(3)); // Outputs: "New capacity is 3"
// console.log(v1.setCapacity(-1)); // Outputs: "Cannot be less than 0"
// console.log(v1.setCapacity(10)); // Outputs: "Cannot exceed initial capacity"

// var nishBday = new Date('1989-11-02')
// var now = new Date(Date.now());

// var difference = now - nishBday;

// console.log(difference / (1000 * 60 * 60 * 24 * 365.25));

// let mateusz = new Hunter("Mateusz", "Szyndler", 21, "Cannon 2012");

// console.log(mateusz.getFullName() + "\n" + mateusz.shoot());

let a1 = new Airplane(200, 100, 300, 500, "JetsRUs");
console.log(a1.setCapacity(200));
console.log(a1.move(3)); // Output: Moving along 3 times
console.log(`Thank you for flying ${a1.airline}: Capcity: ${a1.capacity} passengers: ${a1.numPassangers} speed: ${a1.speed} position: ${a1.position} altitude: ${a1.altitude}.`); // Output: Thank you for flying JetsRUs: Capcity: 200 passengers: 0 speed: 100 position: 600 altitude: 500.
console.log(a1.descend(200)); // Output: Moving along at an altitude of 300 metres
console.log(`Thank you for flying ${a1.airline}: Capcity: ${a1.capacity} passengers: ${a1.numPassangers} speed: ${a1.speed} position: ${a1.position} altitude: ${a1.altitude}.`); // Output: Thank you for flying JetsRUs: Capcity: 200 passengers: 0 speed: 100 position: 600 altitude: 300.