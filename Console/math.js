let aa = 44.454554;
let bb = 49;
let cc =10;
var arr =[10,20,30,40];
const result = Math.sqrt(bb);
const result1 = Math.ceil(aa);
const result2 = Math.pow(cc,2);
const result3 = Math.max(...arr);
const result5 = Math.min(...arr);
console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result5);
console.log(aa.toFixed(2));

// spread operator in javaScript
// 1.combiding Array
let A =[60,70,80];
let B =[70,100,400];
let C =[...A,...B];
console.log(C);
const result4 = Math.max(...C);
console.log(result4);

// 2.passing Argument
function A1(x,y,z){
    return (x*y)/z;
}
//  .how1
//   console.log(A1(40,60));
//  .how2
let A2=[20,60,2];
console.log(A1(...A2));

// 3.Add Array
 let Array1=[0,...A2,200,...C];
 console.log(Array1);