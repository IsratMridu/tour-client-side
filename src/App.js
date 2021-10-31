import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AuthProvider from './components/Context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllOrders from './components/AllOrders/AllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import AddPackage from './components/AddPackage/AddPackage';
import UpdateBooking from './components/UpdateBooking/UpdateBooking';

function App() {
  return (
    <div>
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute exact path='/myOrders'>
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute exact path='/manageAllOrders'>
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute exact path='/addPackages'>
            <AddPackage></AddPackage>
          </PrivateRoute>
          <PrivateRoute exact path='/update/:id'>
           <UpdateBooking></UpdateBooking>
          </PrivateRoute>

          
          <PrivateRoute exact path='/placeorder/:id'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route  path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
        
      </Router>
     </AuthProvider>
     
    </div>
  );
}

export default App;
