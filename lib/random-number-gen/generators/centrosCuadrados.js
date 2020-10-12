class CentrosCuadrados {
  getRandomNumbers(seed, n) {
    if (!this.validateSeed(seed)) {
      throw new Error(
        'Only seeds with positive sign, above 0 and less than 5 digits allowed'
      );
    }

    const randoms = [];
    let x = seed;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < n; i++) {
      const xi = x * x;
      const generator = String(xi.toString()).padStart(8, '0');
      // eslint-disable-next-line radix
      const randNum = parseInt(generator.slice(2, 6));
      randoms.push(randNum / 10000);
      x = randNum;
    }

    return {
      randoms,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  validateSeed(seed) {
    if (seed.toString().length > 4 || Math.sign(seed) < 1) {
      return false;
    }
    if (seed % 1 !== 0) {
      return false;
    }

    return true;
  }
}

export default CentrosCuadrados;
