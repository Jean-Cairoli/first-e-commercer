import logo from './logo.svg';
import './App.css';
import HomePage from './page/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';

const HatsPage =() => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>
    </Switch>
  );
}

export default App;
