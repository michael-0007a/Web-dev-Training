// let students = {name: "John", course: 'webdev', fee:32112};
// console.log(students);
// students.name = "Jane";
// console.log(students.name);
// console.log(students.course);
// console.log(students.fee);
//
// console.log(students['name']);
// console.log(students['course']);
// console.log(students['fee']);
//
// students['course'] = 'webdev2';
// console.log(students['course']);

// let car = {
//     brand: "Toyota",
//     color: "Black",
//     year: 2020,
//     start: function() {
//         console.log("Car started");
//     },
//     stop: function() {
//         console.log("Car stopped");
//     }
// }
//
// console.log(car);
// car.start();

// let students = {
//     name: 'John',
//     course: 'webdev',
//     fee: 32112,
//     address: {
//         city: 'New York',
//         state: 'NY',
//         zip: '10001'
//     },
// }
//
// console.log(students);
// console.log(students.address.city);
// console.log(students.address.state);
// console.log(students.address.zip);

let obj = new Object();
obj.a = 10;
obj.b = 80;
obj.sum = function() {
    return obj.a + obj.b;
}

console.log(obj);
console.log(obj.a);
console.log(obj.b);
console.log(obj.sum());