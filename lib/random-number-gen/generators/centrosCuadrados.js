class CentrosCuadrados {
    constructor() {}

    getRandomNumbers(seed, n) {
    
        if (!validateSeed(seed)) {
            throw new Error('Only seeds with positive sign, above 0 and less than 5 digits allowed');
        }    

        const randoms = [];
        let x = seed;
    
        for (let i = 0; i < n; i++) {
            xi = x * x;
            generator = String(xi.toString()).padStart(8, '0');
            rand_num = parseInt(generator.slice(2, 6));
            randoms.push(rand_num / 10000);
            x = rand_num;
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

    function hullDobell(mul, inc, mod) {
    
        let a = inc > mod ? inc : mod;
        let b = inc > mod ? mod : inc;
    
        while (b !== 0) {
            let reminder = a % b;
            a = b;
            b = reminder;
        }
    
        if (a !== 1) {
            return false;
        }
    
        return true;
    }
    
}

export default CentrosCuadrados;