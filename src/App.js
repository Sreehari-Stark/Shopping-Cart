import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import ShoppingList from './Components/ShoppingList';
import Search from './Components/Search';
import CartIcon from './Components/CartIcon';

import Home from './screens/Home';
import Cart from './screens/Cart';
import { items } from './JSON/JSONData.json';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'ADD_ITEMS', payload: items });
  }

  render() {
    console.log('App mounted', this.props);
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Router>
    );
  }
}

export default connect()(App);
