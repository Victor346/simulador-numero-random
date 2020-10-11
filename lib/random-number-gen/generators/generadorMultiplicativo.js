class GeneradorMultiplicativo {
    constructor () {}

    getRandomNumbers(seed, mul, mod, n) {
        
        if (!validateSeed(seed)) {
            throw new Error('Float numbers not allowed');
        } 
    
        const randoms = [];
        let x = seed;
        let max = -Number.MAX_VALUE;
        let min = Number.MAX_VALUE;
    
        for (let i = 0; i < n; i++) {
            let xi = (x * mul) % mod;
            let randNum = xi / mod;
            randoms.push(randNum);
            x = xi;
    
            if (max < randNum) {
                max = randNum;
            }
            if (min > randNum) {
               min = randNum;
            }
        }
    
        return {
            randoms: randoms,
            max: max,
            min: min,
        }
    }

    validateSeed(seed) {

        if (Math.sign(seed) < 1) {
            return false
        }

        if (seed % 1 !== 0) {
            return false
        }
    
        return true
    }
}

export default GeneradorMultiplicativo;