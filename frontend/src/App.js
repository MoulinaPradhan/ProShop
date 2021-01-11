import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';

const App=()=> {
  return (
    <Router>
      <Header/>
      <main className="py-3">
      <Container>
     <Route path='/' component={HomeScreen} exact/>
     <Route path='/login' component={LoginScreen}/>
     <Route path='/admin/userlist' component={UserListScreen}/>
     <Route path='/order/:id' component={OrderScreen}/>
     <Route path='/shipping' component={ShippingScreen}/>
     <Route path='/placeorder' component={PlaceOrderScreen}/>
     <Route path='/payment' component={PaymentScreen}/>
     <Route path='/register' component={RegisterScreen}/>
     <Route path='/profile' component={ProfileScreen}/>
     <Route path='/product/:id' component={ProductScreen}/>
     <Route path='/cart/:id?' component={CartScreen}/>
      </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
