import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import options from './Quantity.jsx';
import login from "./Login.jsx";
import Products from "./ProductList.jsx"
import Cart from "./Cart.jsx"
import CheckOut from "./CheckOut.jsx"
import {  BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { isAuthenticated } from '../server/repository';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedOption: null,
//       selected: '1'
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(selectedOption){
//     this.setState({ selectedOption });
//     console.log(`Option selected:`, selectedOption);
//   };
//   render() {
//     const { selectedOption } = this.state;

//     return (
//       <Select
//         value={this.state.selectedOption}
//         onChange={this.handleChange}
//         options={options}
//       />
//     )
//   }
// }

// export default App;

class App extends Component {
  logOut(){
    localStorage.removeItem('x-access-token');
  }
  render() {
    const auth = isAuthenticated();
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand" to="/">ShoppingCart</Link>
              <button className="navbar-toggler" type="button"
                data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/">Products</Link>
                  <Link className="nav-item nav-link" to="/cart">Cart</Link>
                  { (auth) ? <Link className="nav-item nav-link" to="/checkout">
                          Checkout</Link>: ''}
                  { ( auth ) ?
                      ( <a className="nav-item nav-link" href="/"
                          onClick={this.logOut}>Log out</a>) :
                      ( <Link className="nav-item nav-link float-right"
                          to="/login">Log in</Link> )
                  }
                </div>
              </div>
            </div>
          </nav>
          <div className="container">
            <br/>
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            { (!auth) ? <Route exact path="/login" component={Login} /> : '' }
          </div>
        </div>
      </Router>
    );
  }
}
export default App;