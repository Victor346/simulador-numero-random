const fs = require('fs');
const merge = require('../sorting/merge');
const kolmogorovTable = require('./kolmogorovSmirnovTable');

class KolmogorovSmirnov {
  validate(list, alpha) {
    let sortedList;
    if (list.length % 2 !== 0) {
      const tempVal = list.pop();
      sortedList = merge.mergeSortFn(list);
      for (let i = 0; i < sortedList.length; i += 1) {
        if (tempVal <= sortedList[i]) {
          sortedList.splice(i, 0, tempVal);
          break;
        } else if (tempVal > sortedList[sortedList.length - 1]) {
          sortedList.push(tempVal);
          break;
        }
      }
    } else {
      sortedList = merge.mergeSortFn(list);
    }
    let dMax = -Number.MAX_VALUE;
    let dMinus = -Number.MAX_VALUE;

    for (let i = 0; i < sortedList.length; i++) {
      const prob = (i + 1) / sortedList.length;
      const r = sortedList[i];
      const xi = Math.abs(prob - r);
      const yi = Math.abs(r - i / sortedList.length);

      if (xi > dMax) {
        dMax = xi;
      }
      if (yi > dMinus) {
        dMinus = yi;
      }
    }

    const d = Math.max(dMax, dMinus);
    const tableValue = this.getTestTableValue(sortedList.length, alpha);
    if (d >= tableValue) {
      return {
        validated: false,
        dMax,
        dMinus,
        dFinal: d,
        tableValue,
      };
    }
    return {
      validated: true,
      dMax,
      dMinus,
      dFinal: d,
      tableValue,
    };
  }

  getTestTableValue(n, alpha) {
    const table = kolmogorovTable.table;
    let value = 0;

    if (n <= 50) {
      value = table[alpha].table[n - 1];
    } else {
      value = table[alpha].fallback / Math.pow(n, 1 / 2);
    }

    return value;
  }
}

export default KolmogorovSmirnov;
