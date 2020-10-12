class CongruencialLineal {
  getRandomNumbers(seed, mul, inc, mod, n) {
    if (!this.validateSeed(seed)) {
      throw new Error('Float numbers not allowed');
    }

    const randoms = [];
    let x = seed;
    let max = -Number.MAX_VALUE;
    let min = Number.MAX_VALUE;

    for (let i = 0; i < n; i += 1) {
      const xi = (x * mul + inc) % mod;
      const randNum = xi / mod;
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
      randoms,
      max,
      min,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  validateSeed(seed) {
    return seed % 1 === 0;
  }

  // true - passed the test, false - failed the test
  hullDobell(mul, inc, mod) {
    const result = [false, false, false];

    if (this.isRelativePrime(inc, mod)) {
      result[0] = true;
    }

    const primeFactors = this.getUniquePrimeFactors(mod);
    for (let i = 0; i < primeFactors.length; i += 1) {
      if ((mul - 1) % primeFactors[i] !== 0) {
        result[1] = false;
        break;
      } else {
        result[1] = true;
      }
    }

    if (mod % 4 === 0 && (mul - 1) % 4 === 0) {
      result[2] = true;
    }

    return result;
  }

  // eslint-disable-next-line class-methods-use-this
  isRelativePrime(x, y) {
    let a = x > y ? x : y;
    let b = x > y ? y : x;

    while (b !== 0) {
      const reminder = a % b;
      a = b;
      b = reminder;
    }

    return a === 1;
  }

  // eslint-disable-next-line class-methods-use-this
  getUniquePrimeFactors(n) {
    const factors = new Set([]);
    let divisor = 2;

    while (n >= 2) {
      if (n % divisor === 0) {
        factors.add(divisor);
        // eslint-disable-next-line no-param-reassign
        n /= divisor;
      } else {
        divisor += 1;
      }
    }

    return Array.from(factors);
  }
}

export default CongruencialLineal;
