class CentrosCuadrados {
    constructor() {}

    getRandomNumbers(seed, n) {
    
        if (!validateSeed(seed)) {
            throw new Error('Only seeds with positive sign, above 0 and less than 5 digits allowed');
        }    

        const randoms = [];
        let x = seed;

        
        for (let i = 0; i < n; i++) {
            let xi = x * x;
            let generator = String(xi.toString()).padStart(8, '0');
            let randNum = parseInt(generator.slice(2, 6));
            randoms.push(randNum / 10000);
            x = randNum;
        }
        
        return {
            randoms: randoms,
        };
    }

    validateSeed(seed) {
        if (seed.toString().length > 4 || Math.sign(seed) < 1) {
            return false
        }
        if (seed % 1 !== 0) {
            return false
        }

        return true
    }
}

export default CentrosCuadrados;