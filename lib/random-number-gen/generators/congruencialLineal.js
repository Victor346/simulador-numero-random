class CongruencialLineal {
    constructor () {}

    getRandomNumbers(seed, mul, inc, mod, n) {

        if (!validateSeed(seed)) {
            throw new Error('Float numbers not allowed');
        } 
    
        const randoms = [];
        let x = seed;
    
        for (let i = 0; i < n; i++) {
            xi = (x * mul + inc) % mod;
            rand_num = xi / mod;
            randoms.push(rand_num);
            x = xi;
        }
    
        return {
            randoms: randoms
        }
    }
    
    validateSeed(seed) {
    
        if (seed % 1 !== 0) {
            return false
        }
    
        return true
    }
}

export default CongruencialLineal;