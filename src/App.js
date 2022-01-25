import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import AllBookings from './components/AllBookings/AllBookings';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import ServiceDetail from './components/Home/ServiceDetail/ServiceDetail';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import ManageBooking from './components/ManageBooking/ManageBooking';
import MyBookings from './components/MyBookings/MyBookings';
import NotFound from './components/NotFound/NotFound';
import UpdateBookingStatus from './components/UpdateBookingStatus/UpdateBookingStatus';
import AuthProvider from './context/AuthProvider';


function App() {
  return (
    <div className="App">
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
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute exact path="/bookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute exact path="/allbookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <PrivateRoute path="/managebooking">
              <ManageBooking></ManageBooking>
            </PrivateRoute>
            <Route path="/bookings/update/:id">
              <UpdateBookingStatus></UpdateBookingStatus>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/servicedetail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
