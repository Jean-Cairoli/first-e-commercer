import logo from './logo.svg';
import './App.css';
import HomePage from './page/homepage/homepage.component.jsx';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './page/shop/shop.component';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
    </Switch>
  );
}

export default App;
