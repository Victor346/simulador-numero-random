let merge = require('../sorting/merge')
let fs = require('fs')

class ChiCuadrada {
    constructor () {}

    validate(list, alpha) {

        const sortedList = merge.mergeSortFn(list);
        const k = Math.trunc(1 + 3.322 * Math.log10(list.length));
        const clase = 1 / k 
        const totalData = sortedList.length;
        
        let classMin = 0;
        let classMax = clase;
        let result = 0;
        let filterOption = function(x) {
            return this[0] <= x && x <= this[1];
        }
        for (let i = 0; i < k; i++) {
            fo = sortedList.filter(filterOption, [classMin, classMax]).length;
            prob = classMax - classMin;
            fe = prob * totalData;
            result += Math.pow(fo - fe, 2)/fe
            classMin = classMax;
            classMax = classMax + clase;
        }
    
        let tableValue = getTestTableValue(k, alpha);

        if (result >= tableValue) {   
            return false;
        } else {
            return true;
        }
    }

    getTestTableValue(n, alpha) {
        let table = JSON.parse(fs.readFileSync('chiCuadradaTable.json', 'utf8'));

        return table[alpha][n-1];;
    }
}

export default ChiCuadrada;