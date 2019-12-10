import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <SimpleModal />
        </div>
      </Modal>
    </div>
  );
}



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { getCartProducts } from '../server/repository.js';
// import AddItem from "./AddItem.jsx"

// //The removeFromCart method in this component is passed to the CartItem component. It deletes the product from the cart on the localStorage and removes the product from the list products to be rendered. The Cart component also provides a clearCart method which removes all the items on the cart (this is done by deleting the cart from the localStorage)
// class Cart extends React.Component {
//       constructor(props) {
//         super(props);
//         this.state = {
            //products: [],
            //total: 0
          //}
//       }
//       componentDidMount() {
//         let cart = localStorage.getItem('cart');
//         if (!cart) return;
//         getCartProducts(cart).then((products) => {
//           let total = 0;
//           for (var i = 0; i < products.length; i++) {
//             total += products[i].price * products[i].qty;
//           }
//           this.setState({ products, total });
//           });
//       }
//       removeFromCart(product) {
//         let products = this.state.products.filter((item) => item.id !== product.id);
//         let cart = JSON.parse(localStorage.getItem('cart'));
//         delete cart[product.id.toString()];
//         localStorage.setItem('cart', JSON.stringify(cart));
//         let total = this.state.total - (product.qty * product.price)
//         this.setState({products, total});
//       }
//       clearCart() {
//         localStorage.removeItem('cart');
//         this.setState({products: []});
//       }
//       render() {
//         const { products, total } =  this.state;
//         return (
//           <div className=" container">
//             <h3 className="card-title">Cart</h3>
//             { products.map((product, index) =>
//                 <CartItem product={product} remove={this.removeFromCart} key={index}/>)

//             }
//             { products.length ?
//               <div><h4>
//                 <small>Total Amount: </small>
//                 <span className="float-right text-primary">${total}</span>
//                 </h4></div>: ''}
//             { !products.length ?<h3 className="text-warning">No item on the cart</h3>: ''}
//             <Link to="/checkout">
//                 <button className="btn btn-success float-right">Checkout</button></Link>
//                 <button className="btn btn-danger float-right" onClick={this.clearCart}
//                 style={{ marginRight: "10px" }}>Clear Cart</button><br/><br/><br/>
//           </div>
//         );
//       }
//     }

// export default Cart;


//!!TEMP CODE
// console.clear();

// let productList = [
//   { name: "android", price: 231, info: "product of google" },
//   { name: "iphone", price: 784, info: "product of apple" },
//   { name: "windows", price: 156, info: "product of microsoft" }
// ];

// /* Product */
// class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       qty: 0
//     };
//     this.add = this.add.bind(this);
//     this.subtract = this.subtract.bind(this);
//     this.showInfo = this.showInfo.bind(this);
//   }

//   add() {
//     this.setState({
//       qty: this.state.qty + 1
//     });
//     this.props.handleTotal(this.props.price);
//   }

//   subtract() {
//     this.setState({
//       qty: this.state.qty - 1
//     });
//     this.props.handleTotal(-this.props.price);
//   }

//   showInfo() {
//     this.props.handleShow(this.props.info);
//   }

//   render() {
//     return (
//       <div>
//         <div className="row form-group">
//           <div className="col-sm-10">
//             <h4>{this.props.name}: ${this.props.price}</h4>
//           </div>
//           <div className="col-sm-2 text-right">qty: {this.state.qty}</div>
//         </div>
//         <div className="row btn-toolbar">
//           <div className="col-6">
//             <button className="btn btn-outline-primary" onClick={this.showInfo}>
//               show info
//             </button>
//           </div>
//           <div className="col-6 text-right">
//             <button className="btn btn-outline-primary" onClick={this.add}>
//               +1
//             </button>
//             <button className="btn btn-outline-primary" onClick={this.subtract} disabled={this.state.qty < 1}>
//               -1
//             </button>
//           </div>
//         </div>
//         <hr />
//       </div>
//     );
//   }
// }

// /* Total */
// class Total extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let total = this.props.total.toFixed(2);
//     let tax = (this.props.total * 0.15).toFixed(2);
//     let totalIncTax = (+total + +tax).toFixed(2);
//     let mystyle = {
//       borderTop: "1px solid #ddd",
//       marginTop: "10px"
//     };
//     return (
//       <div style={{"marginTop": "30px",        "backgroundColor":"#F6F6F6","padding": "10px"}}>
//         <h3 className="row" style={{ fontWeight: 400 }}>
//           <span className="col-6">total price:</span>
//           <span className="col-6 text-right">${total}</span>
//         </h3>
//         <h3 className="row" style={{ fontWeight: 400 }}>
//           <span className="col-6">tax (15%):</span>
//           <span className="col-6 text-right">${tax}</span>
//         </h3>
//         <h3 className="row" style={mystyle}>
//           <span className="col-6">tota inc tax:</span>
//           <span className="col-6 text-right">${totalIncTax}</span>
//         </h3>

//       </div>
//     );
//   }
// }

// /* ProductForm */
// class ProductForm extends React.Component {
//   submit(e) {
//     e.preventDefault();
//     var product = {
//       name: this.refs.name.value,
//       price: Number(this.refs.price.value),
//       info: this.refs.info.value
//     };
//     console.log(this.refs.name.value, this.refs.price.value);
//     this.props.handleProduct(product);
//     this.refs.name.value = "";
//     this.refs.price.value = 0;
//     this.refs.info.value = "";
//   }

//   render() {
//     return (
//       <form onSubmit={this.submit.bind(this)}>
//         <h3>add new product</h3>
//         <div className="row form-group">
//           <label className="col-sm-2  col-sm-form-label">name:</label>
//           <div className="col-sm-10">
//             <input
//               type="text"
//               className="form-control"
//               ref="name"
//               placeholder="e.g.) android"
//               required
//             />
//           </div>
//         </div>

//         <div className="row form-group">
//           <label className="col-sm-2  col-sm-form-label">price:</label>
//           <div className="col-sm-10">
//             <input
//               type="number"
//               className="form-control"
//               ref="price"
//               placeholder="e.g.) 100"
//               required
//             />
//           </div>
//         </div>

//         <div className="row form-group">
//           <label className="col-sm-2  col-sm-form-label">info:</label>
//           <div className="col-sm-10">
//             <input
//               type="text"
//               className="form-control"
//               ref="info"
//               placeholder="e.g.) product of google"
//             />
//           </div>
//         </div>

//         <div className="row form-group">
//           <div className="offset-2 col-10">
//             <button className="btn btn-outline-primary">create product</button>
//           </div>
//         </div>

//         <hr />
//       </form>
//     );
//   }
// }

// /* ProductList */
// class ProductList extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: 0,
//       productList: ""
//     };

//     this.createProduct = this.createProduct.bind(this);
//     this.calculateTotal = this.calculateTotal.bind(this);
//     this.showProduct = this.showProduct.bind(this);
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ productList: productList });
//     }, 1000);
//   }

//   createProduct(product) {
//     this.setState({
//       products: this.state.productList.push(product)
//     });
//   }

//   calculateTotal(price) {
//     this.setState({
//       total: this.state.total + price
//     });
//     console.log(this.state.total);
//   }

//   showProduct(info) {
//     console.log(info);
//     alert(info);
//   }

//   render() {
//     if (!this.state.productList) return <p>loading...!!!!</p>;

//     var component = this;
//     var products = this.state.productList.map(function(product) {
//       return (
//         <Product
//           name={product.name}
//           price={product.price}
//           info={product.info}
//           handleShow={component.showProduct}
//           handleTotal={component.calculateTotal}
//         />
//       );
//     });

//     return (
//       <div>
//         <ProductForm handleProduct={this.createProduct} />
//         {products}
//         <Total total={this.state.total} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ProductList />, document.getElementById("app"));
