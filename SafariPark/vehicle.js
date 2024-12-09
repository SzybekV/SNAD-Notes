export class Vehicle {
    constructor(capacity, speed, position) {
        this.capacity = capacity;
        this.numPassengers = 0;
        this.speed = speed;
        this.position = position;
    }
    move(times){
        if(!parseInt(times)){
            return "Must be Int";
        }
        this.position += this.speed * times;
        return `Moving along ${times} times. Current position ${this.position}.`;
    }
    setCapacity(capacity){
        if(capacity > this.capacity){
            return "Cannot be higher than OG"
        } else if(capacity < 0){
            return "Cannot be -ve" // Negati -ve
        }

        let pastCap = this.numPassengers;
        this.numPassengers = capacity;

        return `Updated capacity to ${this.numPassengers} from ${pastCap}.`;
    }
}