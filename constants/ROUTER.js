import uniloc from 'uniloc';
import mapValues from 'lodash/mapValues';

import ROUTES from './ROUTES.js';

const router = uniloc(mapValues(ROUTES, (route) => {
  return route.path;
}));

export default router;
