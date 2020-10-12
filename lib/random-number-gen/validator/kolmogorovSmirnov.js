let merge = require('../sorting/merge')

class KolmogorovSmirnov {
    constructor () {}

    validate (list, alpha) {

        // Completar

        let sortedList = list.sort();

        let dMax = -Number.MAX_VALUE;
        let dMinus = -Number.MAX_VALUE;

        for (let i = 0; i < list.length; i++) {
            let prob = (i + 1) / list.length;
            let r = list[i];
            let xi = Math.abs(prob - r);
            let yi = Math.abs(r - i / list.length);

            if (xi > dMax) {
                dMax = xi
            }
            if (yi > dMinus) {
                dMinus = yi
            }
        }

        return true;
    }
}

export default KolmogorovSmirnov;