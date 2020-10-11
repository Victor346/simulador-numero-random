class CongruencialCombinado {
    constructor () {}
    //recomendacion en 32 bits: a1 = 40014, m1 = 2147483563, a2 = 40692 y m2 =2147483399
    /*
    json = {
        data: [{ seed: Number, inc: Number, mod: Number }]
        k: Number
    }
    */
    getRandomNumbers(json, n) {
        
        let datas = json.data;
        let xi = [];
        let wi = [];
        let modSum = 1;

        datas.forEach(element => {
            if (!validateSeed(element.seed)) {
                throw new Error('Float numbers not allowed');
            }
            
            xi.push(element.seed);
        });

        // Generate random numbers
        for (let i = 0; i < n; i++) {
            let xiSum = 0;
            for (let j = 0; j < datas.length; j++) {
                let mul = datas[j].mul;
                let mod = datas[j].mod;
                xi[j] = (xi[j] * mul) % mod;
                xiSum += xi[j] * Math.pow(-1, j);
            }
            
            let modT = datas[0].mod - 1;
            let wiSum = ((xiSum % modT) + modT) % modT;
            wi.push(wiSum / datas[0].mod);
        }

        // Calculate the maximum period
        datas.forEach(element => {
            modSum *= (element.mod - 1);
        })
        let p = modSum / json.k;

        return {
            randoms: wi,
            max_period: p
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

export default CongruencialCombinado;