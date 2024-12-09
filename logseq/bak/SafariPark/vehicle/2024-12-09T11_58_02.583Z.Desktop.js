export class Vehicle {
    constructor(capacity, numPassangers, speed, position) {
        this.capacity = capacity;
        this.numPassangers = numPassangers;
        this.speed = speed;
        this.position = position;
    }
    move(times){
        if(!parseInt(times)){
            return "Must be Int";
        }
        this.position += times;
        return `Moving along ${times} times.`
    }
    setCapacity(capacity){
        if(capacity > this.capacity){
            return "Cannot be higher than OG"
        } else if(capacity < 0){
            return "Cannot be -ve" // Negati -ve
        }

        let pastCap = this.numPassangers;
        this.numPassangers = capacity;

        return `Updated capacity to ${this.numPassangers} from ${pastCap}.`;
    }
}