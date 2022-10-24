export class Professional{

    constructor(public name : string,
                public age : number,
                public weight : number,
                public height: number,
                public isRetired: boolean,
                public nationality: string,
                public oscarsNumber: number,
                public profession: string){}

    public setName(name :string){
        this.name = name;
    }
    public setAge(age : number){
        this.age = age;
    }
    public setWeight(weight : number){
        this.weight = weight;
    }
    public setHeight(height){
        this.height = height;
    }
    public setIsRetired(isRetired : boolean){
        this.isRetired = isRetired;
    }
    public setNationality(nationality : string){
        this.nationality = nationality;
    }
    public setOscarsNumber(oscarNumber : number){
        this.oscarsNumber = oscarNumber;
    }
    public setProfession(profession : string){
        this.profession = profession;   
    }

    public getName() : string{
        return this.name;
    }
    public getAge() : number{
        return this.age;
    }
    public getWeight() : number{
        return this.weight;
    }
    public getHeight() : number{
        return this.height;
    }
    public getIsRetired() : boolean{
        return this.isRetired;
    }
    public getNationality() : string{
        return this.nationality;
    }
    public getOscarsNumber() : number{
        return this.oscarsNumber;
    }
    public getProfession() : string{
        return this.profession;
    }

    public printAll() : string {

        return "Name:\t\t" + this.name + "\nAge:\t\t" + this.age + "\nWeight\t\t" + this.weight + "\nHeight:\t\t" + this.height +
                "\nIs retired?\t" + this.isRetired + "\nNationality\t" + this.nationality + "\nOscar number?\t" + this.oscarsNumber +
                "\nProfession\t" + this.profession;
    }
}