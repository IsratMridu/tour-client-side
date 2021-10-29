import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
