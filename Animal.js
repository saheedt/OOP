class Reptilia {
    constructor() {
        venomous: true
    }

    venomous() {
        return this.venomous;
    }

    get isVenomous() {
        this.isVenomous();
    }
}
export default Reptilia;