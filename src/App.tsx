import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './App.styles';
import CartContextProvider from './contexts/CartContext';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <CartContextProvider>
        <div className="App">
          <GlobalStyle />
          <Navbar />
          <div className="main">
            <Switch>
              <Route exact path="/">
                <ProductList />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
          <footer></footer>
        </div>
      </CartContextProvider>
    </Router>
  );
}

export default App;
