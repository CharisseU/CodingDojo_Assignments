//object constructor
class Ninja {
    constructor(name, health=100) {
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3
    }

    sayName() {
        console.log(this.name);
        return this;
    }

    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: ", this.strength); 
        return this;
    }
    
    drinkSake() {
        this.health += 10;
        return this;
    }

    punch(ninja){
        if (ninja instanceof Ninja) {
            ninja.health -= 5;
            console.log(ninja.name, "was punched by", this.name, "and lost 5 health points!");
        }
        else {
            console.log("You can only punch other Ninjas!");
            return false;
        }
    }
    
    kick(ninja) {
        if (ninja instanceof Ninja){
            var kickPower = this.strength * 5;
            ninja.health -= kickPower;
            console.log(ninja.name, "was kicked by", this.name, "and lost", kickPower, "health points!");
		}
        else {
            console.log("You can only kick other ninjas!")
            return false;
        }
    }
}

class Sensei extends Ninja {
	constructor(name) {
		super(name, 200);
        this.wisdom = 10;
        console.log("Sensei Master Splinter says: Trust only in yourself")
        return this;
	}

	speakWisdom() {
		super.drinkSake();
		console.log("Confucius say: Never get soaked with Saki.")
		return this;
	}
}

var Goemon = new Ninja("Goemon");
Goemon.sayName().showStats();

var BillGates = new Ninja("Bill Gates");
BillGates.sayName().showStats();

BillGates.punch(Goemon);
Goemon.showStats();

Goemon.kick(BillGates);
BillGates.showStats();

var Splinter = new Sensei("Master Splinter");
Splinter.speakWisdom();
Splinter.showStats();