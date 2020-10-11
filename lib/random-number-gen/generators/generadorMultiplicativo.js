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
            xi = (x * mul) % mod;
            rand_num = xi / mod;
            randoms.push(rand_num);
            x = xi;
    
            if (max < rand_num) {
                max = rand_num;
            }
            if (min > rand_num) {
               min = rand_num;
            }
        }
    
        return {
            randoms: randoms,
            max: max,
            min: min,
        }
    }

    validateSeed(seed) {

        if (seed % 1 !== 0) {
            return false
        }
    
        return true
    }
}

export default GeneradorMultiplicativo;