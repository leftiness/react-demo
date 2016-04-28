import uniloc from 'uniloc';
import mapValues from 'lodash/mapValues';

import ROUTES from './ROUTES.js';

const router = uniloc(mapValues(ROUTES, (route) => {
  return route.path;
}));

const generate = (name, options) => {
  const safeName = ROUTES.hasOwnProperty(name) ? name : 'notFound';
  return router.generate(safeName, options);
};

export default {
  lookup: router.lookup,
  generate: generate
};
