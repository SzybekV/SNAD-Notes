export class Person{
    constructor(fName, lName, age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    getFullName(){
        return this.fName + " " + this.lName;
    }
}