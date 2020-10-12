let merge = require('../sorting/merge')
let fs = require('fs')

class KolmogorovSmirnov {
    constructor () {}

    validate (list, alpha) {

        let sortedList = merge.mergeSortFn(list);
        let dMax = -Number.MAX_VALUE;
        let dMinus = -Number.MAX_VALUE;
    
        for (let i = 0; i < sortedList.length; i++) {
            let prob = (i + 1) / sortedList.length;
            let r = sortedList[i];
            let xi = Math.abs(prob - r);
            let yi = Math.abs(r - i / sortedList.length);
    
            if (xi > dMax) {
                dMax = xi
            }
            if (yi > dMinus) {
                dMinus = yi
            }
        }
    
        let d = Math.max(dMax, dMinus);
        let tableValue = getTestTableValue(sortedList.length, alpha);
        console.log(d)
        console.log(tableValue)
        if (d >= tableValue) {
            return false;
        } else {
            return true;
        }
    }
    
    getTestTableValue(n, alpha){
    
        let table = JSON.parse(fs.readFileSync('kolmogorovSmirnovTable.json', 'utf8'));
        let value = 0;
    
        if (n <= 50) {
            value = table[alpha].table[n-1];
        } else {
            value = table[alpha].fallback / Math.pow(n, 1 / 2);
        }
    
        return value;
    }
}

export default KolmogorovSmirnov;