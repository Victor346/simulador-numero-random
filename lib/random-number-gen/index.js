import CongruencialLineal from './generators/congruencialLineal';
import GeneradorMultiplicativo from './generators/generadorMultiplicativo';
import CongruencialCombinado from './generators/congruencialCombinado';
import CentrosCuadrados from './generators/centrosCuadrados';

import KolmogorovSmirnov from './validator/kolmogorovSmirnov';
import ChiCuadrada from './validator/chiCuadrada';

// const CentrosCuadrados = require('./generators/centrosCuadrados');

// eslint-disable-next-line import/prefer-default-export
export {
  CentrosCuadrados,
  CongruencialLineal,
  CongruencialCombinado,
  GeneradorMultiplicativo,
  KolmogorovSmirnov,
  ChiCuadrada,
};
