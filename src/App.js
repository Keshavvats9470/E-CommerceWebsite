import './App.css'
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Route, Switch} from "react-router-dom";
import Products from './component/Products';
import Product from './component/Product';

function App() {
  return (
    <>
    <Navbar />
    <Switch> 
       <Route exact path="/" component={Home}/>
       <Route exact path="/products" component={Products}/>
       <Route exact path="/products/:id" component={Product}/>
       <Home />
       </Switch>
    </>
  );
}

export default App;
