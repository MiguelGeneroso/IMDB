import { Movie } from "./movie";
import {Professional} from "./professional";

let m : Movie = new Movie("The lord of the ring: the fellowship of the ring",2001,"new Zealand", "Fantasia");
let p1 : Professional = new Professional("Peter Robert Jackson",60,80,170,false,"New Zealander",3,"Director");
let p2 : Professional = new Professional("Elijah Jordan Wood",41,64,168,false,"American",0,"Actor and productor");
let p3 : Professional = new Professional("Sean Patrick Duke",51,65,170,false,"American",0,"Actor, director and productor");
let p4 : Professional = new Professional("Dominic Bernard Patrick Luke Monaghan",45,68,170,false,"British",0,"Actor");
let p5 : Professional = new Professional("Peter Robert Jackson",60,80,170,false,"British",0,"Actor");
let p6 : Professional = new Professional("Ian Murray McKellen",83,69,181,false,"British",0,"Actor, productor and screenwriter");
let p7 : Professional = new Professional("Viggo Peter Mortensen",64,81,180,false,"American",0,"Actor");
let p8 : Professional = new Professional("Orlando Jonathan Blanchard Bloom",45,77,180,false,"British",0,"Director");
let p9 : Professional = new Professional("John Rhys-Davies",78,80,185,false,"British",0,"Actor");
let p10 : Professional = new Professional("Christopher Frank Carandini Lee",93,90,196,true,"British",0,"Actor and musician");

m.setActors([p2,p3,p4,p5,p6,p7,p8,p9,p10]);
m.setNationality("British");
m.setDirector(p1);
m.setWriter(p1);
m.setLenguage("English");
m.setPlatform("HBO / Amazon");
m.setIsMCU(false);
m.setMainCharacterMain("Frodo");
m.setProducer("Peter Jackson");
m.setDistributor("New Line Cinema");
m.setGenre("Fantasia");

console.log(m.printAll());