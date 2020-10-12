let merge = require('../sorting/merge')

class ChiCuadrada {
    constructor () {}

    validate(list, max, min, alpha) {

        // Completar

        const range = max - min;
        const k = Math.trunc(1 + 3.322 * Math.log10(list.length));
        const clase = Math.ceil(range / k * 10) / 10;
        const totalData = list.length;

        let classMin = 0;
        let classMax = clase;
        let result = 0;
        for (let i = 0; i < k; i++) {
            fo = getArrayRange(list, classMax, classMin);
            prob = classMax - classMin;
            fe = prob * totalData;
            result += Math.pow(fo - fe, 2) / fe;
            classMin = classMax;
            classMax = classMax + clase;
        }

        return true;
    }

    getArrayRange(array, max, min) {

        let size = 0;

        for (let i = array.length-1; i >= 0; i--) {
            if(min <= array[i] && array[i] <= max){
                size ++;
                array.splice(i, 1);
            }
        }
        return size;
    }
}

export default ChiCuadrada;
