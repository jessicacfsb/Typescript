var Person = /** @class */ (function () {
    function Person() {
        this.personName = null;
    }
    Object.defineProperty(Person.prototype, "name", {
        //get
        get: function () {
            return "Person name is: " + this.personName;
        },
        //set
        set: function (value) {
            this.personName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Main = /** @class */ (function () {
    function Main() {
        this.personOne = null;
        this.personTwo = null;
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
    return Main;
}());
var main = new Main();
