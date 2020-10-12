class CongruencialLineal {
    constructor () {}

    getRandomNumbers(seed, mul, inc, mod, n) {

        if (!this.validateSeed(seed)) {
            throw new Error('Float numbers not allowed');
        } 
    
        const randoms = [];
        let x = seed;
        let max = -Number.MAX_VALUE;
        let min = Number.MAX_VALUE;
    
        for (let i = 0; i < n; i++) {
            let xi = (x * mul + inc) % mod;
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
    
        if (seed % 1 !== 0) {
            return false
        }
    
        return true
    }

    // true - passed the test, false - failed the test
    hullDobell(mul, inc, mod) {

        if(!isRelativePrime(inc, mod)){
            return false;
        }
        
        let primeFactors = getUniquePrimeFactors(mod);
        primeFactors.forEach(prime => {
            if (prime % (mul - 1) != 0) {
                return false;
            }
        });
        
        if ((4 % mod !== 0) && (4 % (mul -1) != 0)) {
            return false;
        }
    
        return true;
    }
    
    isRelativePrime(x, y) {
        let a = x > y ? x : y;
        let b = x > y ? y : x;
    
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
    
    getUniquePrimeFactors(n) {
        let factors = new Set([]); 
        let divisor = 2;
        
        while(n>=2){
            if(n % divisor == 0){
                factors.add(divisor); 
                n= n/ divisor;
            }
            else{
                divisor++;
            }     
        }
    
        return Array.from(factors);
    }
}

export default CongruencialLineal;