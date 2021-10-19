import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Doctors from './components/Doctors/Doctors';
import ContactUs from './components/ContactUs/ContactUs';
import Login from './components/Login/Login';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/about-us">
              <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
