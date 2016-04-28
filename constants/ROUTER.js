import uniloc from 'uniloc';
import { flow, mapValues, assign } from 'lodash/fp';

import ROUTES from './ROUTES.js';

const routes = flow(
  mapValues((route) => route.path),
  assign({ notFound: 'GET /404' })
)(ROUTES);

const router = uniloc(routes);

const generate = (name, options) => {
  const safeName = ROUTES.hasOwnProperty(name) ? name : 'notFound';
  return router.generate(safeName, options);
};

export default {
  lookup: router.lookup,
  generate: generate
};
