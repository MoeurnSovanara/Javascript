var obj =
[
    {id:101,Name:"dara",year:2},
    {id:102,Name:"bopha",year:3}
]
// console.table(obj);

// method map
// var id=obj.map((e)=>e.id);
// var Name=obj.map((e)=>e.Name);
// var year=obj.map((e)=>e.year);
// console.log(Name);


// method filter
var result=obj.filter((e)=>e.id<=101).map((e)=>e);
console.log(result);