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
          <Route  path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
     
    </div>
  );
}

export default App;
