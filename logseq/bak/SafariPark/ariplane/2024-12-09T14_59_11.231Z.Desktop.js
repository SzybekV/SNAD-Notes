import { Vehicle } from "./vehicle.js";

export class Airplane extends Vehicle {
    constructor(capacity, speed, position, altitude, airline){
        super(capacity, speed, position);
        this.altitude = altitude > 0 ? altitude : 0;
        this.airline = airline;
    }

    ascend(climb){
        if(!parseInt(climb)){
            return "Must be Int";
        }
        let pastAltitude = this.altitude;
        this.altitude += climb;
        return `Climbing to ${this.altitude}m from ${pastAltitude}m`;
    }

    descend(plunge){
        if(!parseInt(times)){
            return "Must be Int";
        }
        if(this.altitude - plunge < 0){
            return "Cannot descend that much!";
        }
        let pastAltitude = this.altitude;
        this.altitude -= plunge;
        return `Descending to ${this.altitude} from ${pastAltitude}`
    }
}