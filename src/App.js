
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './component/AboutUs/AboutUs';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Registration from './component/Registratration/Registration';
import NotFound from './component/NotFound/NotFound';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Services from './component/Home/Services';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/home/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/services">
            <Services></Services>
            </PrivateRoute>
            <PrivateRoute exact path="/about-us">
              <AboutUs></AboutUs>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/registration">
              <Registration></Registration>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
