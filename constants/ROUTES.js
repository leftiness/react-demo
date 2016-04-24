import Home from 'components/Home.jsx';
import DatesApp from 'components/DatesApp.jsx';

const route = (text, path, component) => {
  return { text, path, component };
};

const ROUTES = {
  home: route('Home', 'GET /home', Home),
  dates: route('Dates', 'GET /dates', DatesApp)
};

export default ROUTES;
