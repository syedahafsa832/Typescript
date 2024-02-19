"use strict";
// console.log('Hello World')
// let a = 'pakistan'
// a = 9;
// console.log(a)
// const a = 5;
// a++
// console.log(a)
// if(true){
//     let a =4;
// }else{
//     let a ='string'
// }
// console.log(a)
// var a:number='0'
// a=9
// console.log(a)
// let mytype = {name:'zia',id:1}
//  mytype = {id:2,name:'tom'}
//  mytype = {id:3,name:'mike',gender:false}
// let arr:string[]=['hafs','ji']
// let ar5:number[]=new number[7]
// let mytype=<any>{name:'ai',id:1}
// mytype={id:2,name:"tom"}
// mytype={id:3,name:"mike",gender:false}
// mytype={id:4,gender:false}
// let notsure:any=4
// notsure='maybe a jjj'
// notsure=false
// const enum color1{red=1,green,blue}
// // let colornam:string=color[2]
// // console.log(colornam)
// // var buildnamefunc:(...rest:string[],fname:string)=>string=
// // function(...restOfName:string[],firstName:string){
// //     return firstName+""+restOfName.join("")
// // }
// // console.log(buildnamefunc('khan',"zia","u."))
// function pickCard (x:{suit:string;card:number;}[]):number;
// function pickCard (x:number):{suit:string;card:number;}
// function pickCard (x):any{
//     if(typeof x === "object"){
//         var pickedCard = Math.floor(Math.random()*x.lenght);
//         return pickedCard;
//     }else if(typeof x == "number"){
//         var pickedSuit = Math.floor(x / 13)
//         return {suit:suits[pickedSuit],card:x % 13}
//     }
// }
// // let c = ((a,b)=>++a)(1,2)
// // console.log(c)
// // var myfunc = f => {this.x="x";};
// interface Cat extends Animal {meow() }
// function isCat(a: Animal): a is Cat { //Line 1
// return true; //Line 2
// }
//  let x: Animal;
// if(isCat(x)) { //Line 3
// }
// x.meow(); // Line 4
// Which of the following statements are correct?
// (Can select one or more)
// 1.
// There will be a compilation error on Line 1
// 2.
// There will be a compilation error of Line 2
// 3.
// There will be a compilation error on Line 3
// 4.
// There will be a compilation error on Line 4
// 5.
// Line 1 implements a user defined type guard
// class Animal {
//   sound() {
//     console.log("some sound");
//   }
// }
// class Cat extends Animal {
//   sound(): void {
//     console.log("Meeeooow...");
//   }
// }
// class Cow extends Animal{
//     sound(){
//         console.log("Muuuuu..");
//     }
// }
// function pickCard (x:{suit:string;card:number;}[]):number;
// function pickCard (x:number):{suit:string;card:number;}
// function pickCard (x):any{
//     if(typeof x === "object"){
//         var pickedCard = Math.floor(Math.random()*x.lenght);
//         return pickedCard;
//     }else if(typeof x == "number"){
//         var pickedSuit = Math.floor(x / 13)
//         return {suit:suits[pickedSuit],card:x % 13}
//     }
// }
// Which of the following statements are correct?
// (Can select one or more)
// 1.
// The function has two overloads
// 2.
// The function has three overloads
// 3
// It will not compile because overloads have different return types
// 4
// It will not compile because overloads have different parameter types
// interface Animal {
//     // Define any common properties or methods for animals
// }
// interface Cat extends Animal {
//     meow(): void;
// }
// function isCat(a: Animal): a is Cat { // Line 1
//     return true; // Line 2
// }
// var x: Animal;
// if (isCat(x)) { // Line 3
// }
// x.meow(); // Line 4
// let a ="paki"
// a = 9
// console.log(a)
// let myFunction = f => { this.x = "x"; };
// let c =((a,b)=> ++a )(1,2);
// console.log(c);
// const a = 5;
// a++
// console.log(a)
// if(true){
//     let a =9
// }else{
//     let a ='str'
// }
// console.log(a)
// var f: (string) => string;
// f = x => '('+x+')';
// var h: ((string) => string)[]
// h = [];
// h.push(f);
// console.log(h[0]("h"));
// type callbackwithstring =(string)=>void;
// function usingcallback (f:callbackwithstring){
//     f('this is a string')
// }
// usingcallback()
// var a:{foo:number};
// var a1 ={foo:1,baz:2}
// a=a1 //a a1 ke andar majood ha ya nhi
// var x:any ="tom";
// if(typeof x ==="string"){
//     console.log(x.length)
// }
// x.unkown()
// Given the following TypeScript code:
var buildNameFun = function (...restOfName, firstName) {
    return firstName + " " + restOfName.join(" ");
};
console.log(buildNameFun("Khan", "Zia", "U."));
// Which of the following statement is correct?
// O 1.
// There will be a compiler error
// O2
// It will print "Zia U. Khan" on the log
// 3.
// It will print "Khan Zia U." on the log
// 4.
// It will print "U. Zia Khan" on the log
