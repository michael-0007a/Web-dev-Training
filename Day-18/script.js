// var math = 90;
// var science = 40;
// var english = 70;
//
// var totalMarks = math + science + english;
// var averageMarks = totalMarks / 3;
// var grade = "";
//
// switch (true) {
//     case (averageMarks <= 100 && averageMarks > 90):
//         grade = "A+";
//         break;
//     case (averageMarks > 80):
//         grade = "A";
//         break;
//     case (averageMarks <= 80 && averageMarks > 70):
//         grade = "B";
//         break;
//     case (averageMarks <= 70 && averageMarks > 60):
//         grade = "C";
//         break;
//     case (averageMarks <= 60 && averageMarks >= 50):
//         grade = "D";
//         break;
//     case (averageMarks < 50):
//         grade = "F";
//         break;
//     default:
//         grade = "Invalid";
// }
//
// console.log("Average Marks:", averageMarks.toFixed(2));
// console.log("Grade:", grade);

//
// if () {
//     grade = "A+";
// }
// else if (percentage <= 90 && percentage >80) {
//     grade = "A";
// }
// else if (percentage <= 80 && percentage >70) {
//     grade = "B";
// }
// else if (percentage <= 70 && percentage >60) {
//     grade = "C";
// }
// else if (percentage <= 60 && percentage >50) {
//     grade = "D";
// }
// else if (percentage <= 50 && percentage >40) {
//     grade = "E";
// }
// else {
//     grade = "F";
// }

// console.log("Total Marks: " + totalMarks);
// console.log("Average Marks: " + averageMarks);
// console.log("Grade: " + grade);

// var u = 190;
// switch (true) {
//     case (u<200):
//         console.log("Free");
//         break;
//     case (200<=u<300):
//         console.log(u*2);
//         break;
//     case (500<=u<1000):
//         console.log(u*5);
//         break;
//     case (1000<=u<1500):
//         console.log(u*10);
//         break;
//     case(u>=1500):
//         console.log(u*20);
//         break;
//
// }


var n = 5;
// if (n<0) {
//     console.log("Negative");
// }
// else if (n==0) {
//     console.log("Zero");
// }
// else if(n>0){
//     console.log("Positive");
// }

//
// for (var i = 0; i <= 50; i+=5) {
//     console.log(i);
//     if(i==25) {
//         break;
//     }
// }
// var n=0
// for(var i = 1; i <= 50; i++){
//     if( i % 2 == 0) {
//         n+= 1;
//     }
// }

// n=0
// result = 1;
// for(var i = n; i >0; i--) {
//     result *= i;
// }
//
// console.log(result);



//
// function check(){
//     var a = Number(document.getElementById("numberInput").value);
//     if(a%2==0){
//         document.getElementById("result").innerHTML = "Even";
//     }
//     else {
//         document.getElementById("result").innerHTML = "odd";
//     }
// }


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