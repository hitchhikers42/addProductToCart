import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import options from './Quantity.jsx';
import AddItem from './AddItem.jsx';
import CustomizedExpansionPanels from './Delivery.jsx';
import CustomizedExpansionPanels2 from './Shipping.jsx';
import CustomizedExpansionPanels3 from './PriceMatch.jsx';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Product from './AddItem.jsx';
import simpleModal from './Cart.jsx';
import data from '../database/dataReact.js'
//import AddRegistry from './AddRegistry.jsx';
//import login from './Login.jsx';
//import Products from './ProductList.jsx';
//import Cart from './Cart.jsx';
//import CheckOut from './CheckOut.jsx';
// import {  BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import { isAuthenticated } from '../server/repository.js';

// https://www.npmjs.com/package/react-shopping-cart will this help?

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: {value: "one", label: "1"}, /* selected from drop down menu */
      selected: 1,        /**/
      qty: 0, //initially starts at zero
      total: 0,
      cartItems: [],
      //addedOption: null,    /* this is what is selected */
      //added: '',            /* added to shopping cart */
      //addRegistry: '',      /* this is what is selected for the registry */
      //registry: [],         /* this is the item in the registry */
      //addCart: null,          /* add item to shopping cart */
      //cart: []              /* shopping cart */
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
  }

  componentDidMount() {
    console.log("ComponentDidMount: Guess what? The component mounted!")
    axios({
      method: 'GET',
      url: '/api/products',
      sucess: data => {
        this.setState({ addedOption: data });
      }
    })
      .then(res => {
        this.setState({ addedOption: res.data })
        console.log(`App.state.addedOption=${JSON.stringify(this.state.addedOption)}`)
      })
      .catch(err => {
        console.log(`GET error=${err}`);
      })
  }

  add(id) {
    //option = this.state.selectedOption
    //let quantity =
    // this.setState({
    //   qty: this.state.qty + Number(this.state.selectedOption.label)
    // });
    // console.log(this.state.selectedOption)
    //this.props.handleTotal(this.props.price);
    const newItems = [...this.state.cartItems];
    // console.log(new Array(Number(this.state.selectedOption.label)))
    const emptyArray = Array.apply(5, Array(Number(this.state.selectedOption.label)));
    emptyArray.forEach(() => newItems.push(id))
    // emptyArray.map(n => console.log('asdf'))
    // new Array(Number(this.state.selectedOption.label)).forEach(() => newItems.push(id));
    // newItems.push(id)
    this.setState({ cartItems: newItems })
  }

  subtract() {
    // let quantity = this.state.qty - Number(this.state.selectedOption.label);
    // if (quantity < 0) {
    //   quantity = 0;
    // }
    // this.setState({
    //   qty: quantity
    // });
    const newItems = [...this.state.cartItems];
    // console.log(new Array(Number(this.state.selectedOption.label)))
    const emptyArray = Array.apply(5, Array(Number(this.state.selectedOption.label)));
    emptyArray.forEach(() => newItems.pop())

    this.setState({ cartItems: newItems })
    //this.props.handleTotal(-this.props.price)
  }


  handleChange(selectedOption){
    this.setState({
      selectedOption
    });
    console.log(`Option added:`, selectedOption);
  };

  handleButton(qty) {
    this.setState({
      qty: this.state.qty * this.state.selectedOption
    });
    console.log(`Quantity added:`, qty);
  }

  // product: find what is selected and then add that item to the cart
  // registry: find what is selected and then add that item to the registry

  render() {
    const {
      selectedOption
    } = this.state;
    const inCart = this.state.selectedOption

    const product = data[0];

    //when I click add to cart, it has to use the id of the  product to the cart.

    return (
      <div className="parent" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div className="quantity" style={{display: 'inlineBlock', width: '280px', marginBottom: '20px', fontSize: '14px', fontWeight: 'bold', select: {height: '50px'}}}>
          <Select
            value={this.state.selectedOption.label}
            onChange={this.handleChange}
            defaultValue={this.state.selectedOption}
            options={options}
            placeholder={this.state.selectedOption.label}
            maxMenuHeight = {186}
            fontFamily= "Montserrat,Helvetica,Arial,sans-serif" //not working
            cursor="pointer" //look this up
            //on focus
            //hover
          />
        </div>

      {/* <div className="cartAll">
        🛒 ___ people have this in their cart
      </div> */}

      <div className="cartUser">
       {this.state.cartItems.length} items in your 🛒
      </div>

      <div>
        <button className="addItem" type="button" onClick={() => this.add(product.productId)}>
        {/* <button className="addItem" type="button" onClick={this.handleButton}> */}
          Add to Cart
        </button>
      </div>

      <div>
        <button className="removeItem" type="button" onClick={this.subtract} disabled={this.state.cartItems.length < 1}>
          Remove from Cart
        </button>
      </div>

      <div>
        <button className="addRegistry" type="button">
          Add to Registry
        </button>
      </div>

      <div className="delivery">
        <CustomizedExpansionPanels />
      </div>

      <div className="shipping">
      {/* <CustomizedExpansionPanels2 /> */}
      </div>

      <div className="price">
      {/* <CustomizedExpansionPanels3 /> */}
      </div>

      </div>
    )
  }
}

export default App;

// onChange(element) { //this is like shouldComponentUpdate?
  //   if(element.target.id === "addedOption") {
  //     this.setState ({
  //       addedOption: element.target.value,
  //     })
  //   }
  // };

  // handleSubmit() {
  //   console.log(this.state);
  //   axios({
  //     method: 'post',
  //     url: '/api/products',
  //     data: this.state,
  //     dataType: 'application/json'
  //   })
  // }

  // addItem (e) {
  //   this.setState({
  //     addedOption: e.target.value
  //   });
  // }

  // addRegistry (e) {
  //   this.setState({
  //     addRegistry: e.target.value
  //   });
  // }

// class App extends React.Component {
//   logOut(){
//     localStorage.removeItem('x-access-token');
//   }
//   render() {
//     const auth = isAuthenticated();
//     return (
//       <Router>
//         <div>
//           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container">
//               <Link className="navbar-brand" to="/">ShoppingCart</Link>
//               <button className="navbar-toggler" type="button"
//                 data-toggle="collapse" data-target="#navbarNavAltMarkup"
//                 aria-controls="navbarNavAltMarkup" aria-expanded="false"
//                 aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div className="navbar-nav">
//                   <Link className="nav-item nav-link" to="/">Products</Link>
//                   <Link className="nav-item nav-link" to="/cart">Cart</Link>
//                   { (auth) ? <Link className="nav-item nav-link" to="/checkout">Checkout</Link>: ''}
//                   { ( auth ) ?
//                       ( <a className="nav-item nav-link" href="/"
//                           onClick={this.logOut}>Log out</a>) :
//                       ( <Link className="nav-item nav-link float-right"
//                           to="/login">Log in</Link> )
//                   }
//                 </div>
//               </div>
//             </div>
//           </nav>
//           <div className="container">
//             <br/>
//             <Route exact path="/" component={Products} />
//             <Route exact path="/cart" component={Cart} />
//             <Route exact path="/checkout" component={Checkout} />
//             { (!auth) ? <Route exact path="/login" component={Login} /> : '' }
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }
// export default App;
