// logical AND && and logical OR ||

/*
function newname(name){
return name;
}
let a = false
let b = true
console.log(a && b,  newname("ranjan")); // && AND operater is taking one of its false all are false
console.log(a || b,  newname("ranjan")); // || OR operater is taking one of its true all are true
*/

// Template literlas
/*
let name1 = "ranjan"
let name2 = "kumar"
console.log(`my name is ${name1}-${name2}`);
*/

// ternery operater

// let showname = false
// function nameshow1(showname)
// {
//     return showname;
// }
// function nameshow2(showname)
// {
//     return showname;
// }
// /*
// if (showname) {
// console.log(nameshow1("pepsi"));
// }else {
//     console.log(nameshow2("sprite"));
// }*/

// showname ? nameshow1("pepsi") : nameshow2("sprite")

// Object and array destructuring

// let id = 2
// let nameof  = "ranjan"
// let pro = "apple"

// const product2 = {
//     myname : "myname",
//     id,
//     nameof,
//     pro,
// }
// console.log(product2);

// const getname = product2.myname
// console.log(getname);

// const {myname} = product2
// console.log(myname);

// const array = [1, 2, 3];

// const newarray = array[1]
// console.log(newarray);

// const [getarray1, getarray2] = array
// console.log(getarray1, getarray2);

// Default parameters, spread operators and rest parameters

//default parameter
// function multi(num1 =1, num2= 5){
//     console.log(num1, num2);
//     return num1*num2
// }
// console.log(multi(2,4));

//spred operator
// const array1 = [2, 1, 22]
// const array2 = [3,21, 24]

// console.log(...array1,array2,...array2);
// console.log([...array1,22, ...array2]);

//rest parameter
// function rest(q,...a){
//     return q, a
// }
// console.log(rest(1,22,33,32,34, 55, 5));

// ES6 array methods
// map, filter, find, some , every, indexof, findIndex

const person = [
  {
    nameof: "ranjan",
    age: 24,
    city: "india",
  },
  {
    nameof: "ranjan111",
    age: 23,
    city: "india",
  },
  {
    nameof: "sipun",
    age: 21,
    city: "bls",
  },
];

//MAP
// const getname = person.map((myname, index) => {
//   console.log(myname, index);

//   return `${myname.nameof} age is ${myname.age}`;
// });
// console.log(getname);

//FIND

// let funfind = person.find((yoursname, valuse)=>{
//     return yoursname.city === "india"
// })
// console.log(funfind);

//FILTER

// let funfilter = person.filter((hisname,laves)=> {
//     return  hisname.city === "india"
// })
// console.log(funfilter);

//SOME
// let somefun = person.some((myname) =>{
//     return myname.age > 20;
// })
// console.log(somefun);

//EVERY
// let everyfun = person.every((myname) =>{
//     return myname.age > 20;
// })
// console.log(everyfun);

//Indexof
//  let letter = ["ranjan", "sipunu"]
// console.log(letter.indexOf("ranjan"));

// Async Await

// let productname = document.querySelector(".listproduct");
// // console.log(productname);
// function renderproduct(getproduct){
//     productname.innerHTML = getproduct.map(singlevalue => `${singlevalue.id} - ${singlevalue.title} `).join(", ")
// }

// async function listofproduct() {
//   try {
//     const apiresponse = await fetch("https://dummyjson.com/products", {
//       method: "GET",
//     });
//     const result = await apiresponse.json();
//     console.log(result);
//     if (result?.products?.length >0) renderproduct(result?.products)

//   } catch (error) {
//     console.log(error);
//   }
// }
// listofproduct()