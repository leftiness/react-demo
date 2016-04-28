import Home from 'components/Home.jsx';
import Reservations from 'components/Reservations.jsx';
import NotFound from 'components/NotFound.jsx';

const route = (text, path, component) => {
  return { text, path, component };
};

const ROUTES = {
  home: route('Home', 'GET /home', Home),
  reservations: route('Reservations', 'GET /reservations', Reservations),
  notFound: route('Not Found', 'GET /404', NotFound)
};

export default ROUTES;
