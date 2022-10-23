export class Professional{

    constructor(public name : string,
                public age : number,
                public weight : number,
                public height: number,
                public isRetired: boolean,
                public nationality: string,
                public oscarsNumber: number,
                public profession: string){}

    public printAll() : string {

        return "Name:\t\t" + this.name + "\nAge:\t\t" + this.age + "\nWeight\t\t" + this.weight + "\nHeight:\t\t" + this.height +
                "\nIs retired?\t" + this.isRetired + "\nNationality\t" + this.nationality + "\nOscar number?\t" + this.oscarsNumber +
                "\nProfession\t" + this.profession;
    }
}