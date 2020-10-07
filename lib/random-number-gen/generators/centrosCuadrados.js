class CentrosCuadrados {
    constructor() {}

    getRandomNumbers(seed, n) {
        if (seed / 10000 > 0){
            throw new Error('Only seeds with less than 4 digits allowed');
        }

        xi = seed * seed;
        xi.toString(8).split('').map(Number);

        console.log(xi);
        
    }
}

export default CentrosCuadrados;