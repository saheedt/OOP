import Reptilia from './Reptilia';

class Lizard extends Reptilia {
    constructor(type, venomous, legs) {
        super();
        this.type = type;
        this.venomous = venomous;
        this.legs = legs;
    }
    get details() {
        return {
            type: this.type,
            venomous: this.venomous,
            legs: this.legs
        };
    }
    modify(type, venomous, legs) {
      this.type = type;
      this.venomous = venomous;
      this.legs = legs;
      return this.details;
    }
}

export default Lizard;