import Home from 'components/Home.jsx';
import DatesApp from 'components/DatesApp.jsx';
import NotFound from 'components/NotFound.jsx';

const route = (text, path, component) => {
  return { text, path, component };
};

const ROUTES = {
  home: route('Home', 'GET /home', Home),
  dates: route('Dates', 'GET /dates', DatesApp),
  notFound: route('Not Found', 'GET /404', NotFound)
};

export default ROUTES;
