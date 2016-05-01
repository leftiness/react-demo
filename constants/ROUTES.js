import Home from 'components/Home.jsx';
import ReservationsContainer from 'containers/ReservationsContainer.jsx';
import NotFound from 'components/NotFound.jsx';

const route = (text, path, component) => {
  return { text, path, component };
};

const ROUTES = {
  home: route('Home', 'GET /home', Home),
  reservations: route(
    'Reservations',
    'GET /reservations',
    ReservationsContainer,
  ),
};

export default ROUTES;
