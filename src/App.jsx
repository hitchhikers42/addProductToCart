import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import options from './Quantity.jsx';
import CustomizedExpansionPanels from './Delivery.jsx';
import CustomizedExpansionPanels2 from './Shipping.jsx';
import CustomizedExpansionPanels3 from './PriceMatch.jsx';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SimpleModal from './Cart.jsx';
import data from '../database/data.js'
import "core-js/stable";
import "regenerator-runtime/runtime";
import '@babel/polyfill'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

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
      currentProduct: [],
      currentImage: "",
      open: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  componentDidMount() {
    this.loadProduct()
    //console.log(data);
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

  async loadProduct() {
    const productId = window.location.pathname.split('/')[2] ;
    const response = await fetch(`/api/products/${productId}`);
    const myJSON = await response.json();
    this.setState({currentProduct: myJSON,
    currentImage: myJSON[0].imageKey});
    console.log(this.state.currentProduct[0].imageKey)
  }

  add(id) {
    const newItems = [...this.state.cartItems];
    // console.log(new Array(Number(this.state.selectedOption.label)))
    const emptyArray = Array.apply(5, Array(Number(this.state.selectedOption.label)));
    emptyArray.forEach(() => newItems.push(id))
    this.setState({ cartItems: newItems })
  }

  subtract() {
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

  handleModal(e){
    e.preventDefault();
    return <SimpleModal/>
  };


  // product: find what is selected and then add that item to the cart
  // registry: find what is selected and then add that item to the registry

  render() {
    const {
      selectedOption
    } = this.state;
    const inCart = this.state.selectedOption
    const product = this.state.currentProduct[0];

    //when I click add to cart, it has to use the id of the  product to the cart.

    return (
      <div className="parent" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

      <div><img className="productImg" src={`${this.state.currentImage}`} /></div>

        <div  className="quantity" style={{display: 'inlineBlock', width: '280px', marginBottom: '20px', fontSize: '14px', fontWeight: 'bold', select: {height: '50px'}}}>
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

      <div className="currentItem">
         Selected Item: <span className="itemName"> {product ? product.title : null} </span>
      </div>

      <div className="cartUser" >
       {this.state.cartItems.length} items in your:
      </div>
        <SimpleModal />
      <div>
        <button className="addItem" type="button" onClick={() => this.add(product.productId)}>
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

