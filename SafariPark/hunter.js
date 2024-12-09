import { Person } from "./person.js";

export class Hunter extends Person{
    constructor(fName, lName, age, camera){
        super(fName, lName, age);
        this.camera = camera;
    }

    shoot(){
        return `Shooting with a ${this.camera}`;
    }
}