const fs = require('fs');
const merge = require('../sorting/merge');
const chiCuadradaTable = require('./chiCuadradaTable');

class ChiCuadrada {
  constructor() {}

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
    const k = Math.trunc(1 + 3.322 * Math.log10(list.length));
    const clase = 1 / k;
    const totalData = sortedList.length;

    let classMin = 0;
    let classMax = clase;
    let result = 0;
    const filterOption = function (x) {
      return this[0] <= x && x <= this[1];
    };
    for (let i = 0; i < k; i++) {
      const fo = sortedList.filter(filterOption, [classMin, classMax]).length;
      const prob = classMax - classMin;
      const fe = prob * totalData;
      result += Math.pow(fo - fe, 2) / fe;
      classMin = classMax;
      classMax += clase;
    }

    const tableValue = this.getTestTableValue(k - 2, alpha);

    if (result >= tableValue) {
      return {
        validated: false,
        result,
        tableValue,
      };
    } else {
      return {
        validated: true,
        result,
        tableValue,
      };
    }
  }

  getTestTableValue(n, alpha) {
    const table = chiCuadradaTable.table;

    return table[alpha][n - 1];
  }
}

export default ChiCuadrada;
