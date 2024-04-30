//let, const

// let score;
// score = 31;
// console.log(score);

//data-types
//String, Number, Boolean, null, undefined
// const name = "john";
// const age = 40;

// console.log("My name is " + name + " and I am " + age);
// console.log(`My name is ${name} and I am ${age}`)

// const s = "Hello World!";
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(""));

// const fruits = ["apple", "orange", "pears"];
// // fruits[3] = "grapes";
// // fruits.push("mangoes");
// fruits.unshift("stroberries");
// // fruits.pop();
// console.log(fruits)
// console.log(Array.isArray("hello"))
// console.log(fruits.indexOf("orange"))

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     hobbies: ["music", "movies", "running"],
//     address: {
//         street: "50 main street",
//         city: "Boston",
//         state: "MA"
//     }
// }

// const { firstName, lastName, address: { city } } = person
// console.log(city)

// const toDos = [
//     {
//         id: 1,
//         text: "Take out trash",
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: "Meeting with boss",
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: "Dentist appt.",
//         isCompleted: false
//     }
// ];
// for (let i = 0; i < toDos.length; i++) {
//     console.log(toDos[i].text);
// };



// const toDosJSON = JSON.stringify(toDos);
// console.log(toDosJSON);
// for (let todo of toDos) {
//     console.log(todo.id)

//high order array method
//forEach, map, filter
// const todoText = toDos.map(function (toDo) {
//     return toDo.text;
// })
// console.log(todoText);

//-------map--------y 

// const arr = [
//     {
//         lastName: "mitra"
//     },
//     {
//         fastName: "sandwip"
//     },
//     {
//         nickName: "nudu"
//     },
//     {
//         anotherName: "sagar"
//     }
// ];
// const new_array = arr.map(function (names) {
//     return names.lastName;
// })
// console.log(new_array)

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(function (items) {
//     return items * 2;
// })
// // const doubled = numbers.map(item => item * 2);
// console.log(doubled);

//----------filter--------
//Example-1
// const toDos = [
//     {
//         id: 1,
//         text: "Take out trash",
//         location: "KL",
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: "Meeting with boss",
//         location: "PJ",
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: "Dentist appt.",
//         isCompleted: false
//     }
// ];

// const todoCompleted = toDos.filter(function (todo) {
//     return todo.isCompleted === true;
// }).map(function (todo) {
//     return todo.location;
// })
// console.log(todoCompleted);

//Example-2
// const numbers = [1, 2, 3, 4];
// const evens = numbers.filter(function (items) {
//     return items % 2 === 0;
// })
// console.log(evens) //[2, 4]

//Example-3
const students = [
    { name: "Quency", grade: 96 },
    { name: "Jason", grade: 84 },
    { name: "Alexis", grade: 100 },
    { name: "Sam", grade: 65 },
    { name: "Katie", grade: 90 },
    { name: "Mitra", grade: 95 },
];

// const studentGrades = students.filter(function (student) {
//     return student.grade >= 90;
// })
// console.log(studentGrades)

//method-2
const studentGrades = students.filter(student => student.grade >= 90);
//return studentGrades;
console.log(studentGrades)





















//for loop
// for (let i = 0; i <= 10; i++) {
//     console.log(`For loop number: ${i}`)
// };

//while loop

// let i = 0;
// while (i <= 10) {
//     console.log(`while loop number: ${i}`);
//     i++;
// }

