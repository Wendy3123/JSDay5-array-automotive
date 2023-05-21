//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")


class Car extends VehicleModule.Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5
        this.passengers = 0
        this.numberofWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }
    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    scheduleServiceforVehicle(){
        if(this.mileage > 30000){
            this.scheduleService =true
            return this.scheduleService
        }
    }
    loadPassengers(totalnum){
        if(this.passengers < this.maximumPassengers){
            if((totalnum + this.passengers) <= this.maximumPassengers){
                this.passengers = totalnum
                return this.passengers
            }
            else{
                console.log(`${this.model} ${this.make} does not have enough space to take all passengers.`)
            }
        }else{
            console.log(`${this.model}  ${this.make} is full`);
        }
    } 
}

//After you write the derived Car class, you should test it out.
//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...



//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.

let v = new Car("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
v.start()
v.loadPassengers(5)
v.stop()
v.checkService()

console.log(v)



//Create at least two new instances of the Car class and test them here:
