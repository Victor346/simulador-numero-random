/* eslint react/jsx-props-no-spreading: off */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CentrosCuadradosPage from './containers/CentrosCuadradosPage';
import CongruencialPage from './containers/CongruencialPage';
import CongruencialMixtoPage from './containers/CongruencialMixtoPage';
import GeneradorMultiplicativoPage from './containers/GeneradorMultiplicativoPage';
import CongruencialLinealCombinadoPage from './containers/CongruencialLinealCombinadoPage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route exact path={routes.HOME} component={HomePage} />
        <Route
          path={routes.CENTROS_CUADRADOS}
          component={CentrosCuadradosPage}
        />
        <Route path={routes.CONGRUENCIAL} component={CongruencialPage} />
        <Route
          path={routes.CONGRUENCIAL_MIXTO}
          component={CongruencialMixtoPage}
        />
        <Route
          path={routes.GENERADOR_MULTIPLICATIVO}
          component={GeneradorMultiplicativoPage}
        />
        <Route
          path={routes.CONGRUENCIAL_LINEAL_COMBINADO}
          component={CongruencialLinealCombinadoPage}
        />
      </Switch>
    </App>
  );
}
