class Person {
    private personName: string = null;

    constructor() { 
    }

    //get
    public get name (): string {
        return "Person name is: " + this.personName;
    }

    //set
    public set name (value: string) {
        this.personName = value;
    }
}

class Main {
    private personOne: Person = null;
    private personTwo: Person = null;
    
    constructor() {
        this.personOne = new Person();

        //using set
        this.personOne.name = "Jéssica";

        //using get
        alert(this.personOne.name);

        this.personTwo = new Person();

        //using set
        this.personTwo.name = "Júlia";

        //using set
        alert(this.personTwo.name);
    }
}


var main = new Main ();