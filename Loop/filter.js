let Array = [
    {Name:"sovanara",age:18,Sex:"M"},
    {Name:"nuna",age:20,Sex:"F"},
    {Name:"Mesa",age:11,Sex:"M"},
    {Name:"tola",age:30,Sex:"M"}
];
let result= Array.filter((el)=>el.age>=18 && el.Sex=="M").map((e)=>e);
console.log(result);