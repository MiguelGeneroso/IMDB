import { Professional } from "./professional";

let p1 : Professional = new Professional("Peter Robert Jackson",60,80,170,false,"New Zealander",3,"Director");
let p2 : Professional = new Professional("Willard Carroll Smith II",54,88,188,false,"American",1,"Actor, productor y guionista");
let p3 : Professional = new Professional("Leonardo Wilhelm DiCaprio",47,75,183,false,"American",1,"Actor y productor");
let p4 : Professional = new Professional("Orlando Jonathan Blanchard Bloom",45,77,180,false,"British",0,"Director");

console.log(p1.printAll());
console.log("---------------");
console.log(p2.printAll());
console.log("---------------");
console.log(p3.printAll());
console.log("---------------");
console.log(p4.printAll());
