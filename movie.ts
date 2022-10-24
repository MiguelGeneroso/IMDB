import {Professional} from "./professional";

// let p1 : Professional = new Professional("Peter Robert Jackson",60,80,170,false,"New Zealander",3,"Director");
// let p2 : Professional = new Professional("Elijah Jordan Wood",41,64,168,false,"American",0,"Actor and productor");
// let p3 : Professional = new Professional("Sean Patrick Duke",51,65,170,false,"American",0,"Actor, director and productor");
// let p4 : Professional = new Professional("Dominic Bernard Patrick Luke Monaghan",45,68,170,false,"British",0,"Actor");
// let p5 : Professional = new Professional("Peter Robert Jackson",60,80,170,false,"British",0,"Actor");
// let p6 : Professional = new Professional("Ian Murray McKellen",83,69,181,false,"British",0,"Actor, productor and screenwriter");
// let p7 : Professional = new Professional("Viggo Peter Mortensen",64,81,180,false,"American",0,"Actor");
// let p8 : Professional = new Professional("Orlando Jonathan Blanchard Bloom",45,77,180,false,"British",0,"Director");
// let p9 : Professional = new Professional("John Rhys-Davies",78,80,185,false,"British",0,"Actor");
// let p10 : Professional = new Professional("Christopher Frank Carandini Lee",93,90,196,true,"British",0,"Actor and musician");


export class Movie {

    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nationality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title : string, releaseYear : number, nationality : string, genre : string){

        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.actors = [];
        this.director;
        this.writer;
        this.language = "";
        this.platform = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
    }

    // SETTERS
    public setTitle(t : string){
        this.title = t;
    }
    public setReleaseYear(n : number){
        this.releaseYear = n;
    }
    public setNationality(t : string){
        this.nationality = t;
    }
    public setGenre(t : string){
        this.genre = t;
    }
    public setActors(t : Professional[]){
        this.actors = t;
    }
    public setDirector(t : Professional){
        this.director = t;
    }
    public setWriter(t : Professional){
        this.writer = t;
    }
    public setLenguage(t : string){
        this.language = t;
    }
    public setPlatform(t : string){
        this.platform = t;
    }
    public setIsMCU(t : boolean){
        this.isMCU = t;
    }
    public setMainCharacterMain(t : string){
        this.mainCharacterName = t;
    }
    public setProducer(t : string){
        this.producer = t;
    }
    public setDistributor(t : string){
        this.distributor = t;
    }

    //GETTERS
    public getTitle() : string{
        return this.title;
    }
    public getReleaseYear() : number{
        return this.releaseYear;
    }
    public getNationality() : string{
        return this.nationality;
    }
    public getGenre() : string{
        return this.genre;
    }
    public getActors() : Professional[]{
        return this.actors;
    }
    public getDirector() : Professional{
        return this.director;
    }
    public getWriter() : Professional{
        return this.writer;
    }
    public getLenguage() : string{
        return this.language;
    }
    public getPlatform() : string{
        return this.platform;
    }
    public getIsMCU() : boolean{
        return this.isMCU;
    }
    public getMainCharacterMain(t : string) : string{
        return this.mainCharacterName;
    }
    public getProducer() : string{
        return this.producer;
    }
    public getDistributor() : string{
        return this.distributor;
    }

    public printAll() : string{

        return "Title:\t\t\t" + this.title + "\nRelease Year:\t\t" + this.releaseYear + "\nActors:\t\t\t" + this.actors +
                "\nNacionality:\t\t" + this.nationality + "\nDirector:\t\t" + this.director.getName() + "\nwriter\t\t\t" + 
                this.writer.getName() + "\nLanguage:\t\t" + this.language + "\nPlataforma\t\t" + this.platform + "\nIs MCU:\t\t\t" +
                this.isMCU + "\nMain character name:\t" + this.mainCharacterName + "\nProducer:\t\t" + this.producer +
                "\nDistributor\t\t" + this.distributor + "\nGenre:\t\t\t" + this.genre;
    }

    
}