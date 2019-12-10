// import React from 'react';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Button from '@material-ui/core/Button';

// class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       qty: 0
//     };
//     this.add = this.add.bind(this);
//     this.subtract = this.subtract.bind(this);
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
//     this.props.handleTotal(-this.props.price)
//   }

//   render() {
//     return (
//       <div>
//         <div className="row form-group">
//           <div className="col-sm-10">

//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default Product;
// // // const AddItem = (props) => {
// // //   console.log(props.currentItem);
// // //   const currentItem = props.currentItem[0];
// // //   return (
// // //     <div className="item">

// // //     </div>
// // //   )
// // // }

// //addItem adds the given product to the cart which is an object stored in localStorage as a string using the JSON.stringify method, then converts the string back to object using the JSON.parse method or creates a new object if no item is found. The product is then added, and the cart is saved back in localStorage
// // addItem() {
// //   let cart = localStorage.getItem('cart')
// //   ? JSON.parse(localStorage.getItem('cart')) : {};
// //   let id = this.props.product.id.toString();
// //   cart[id] = (cart[id] ? cart[id]: 0);
// //   let qty = cart[id] + parseInt(this.state.quantity);
// //   if (this.props.product.available_quantity < qty) {
// //     cart[id] = this.props.product.available_quantity;
// //   } else {
// //     cart[id] = qty
// //   }
// //   localStorage.setItem('cart', JSON.stringify(cart));
// // }

// // const useStyles = makeStyles(theme => ({

// // }));

// //   export default function ContainedButtons() {
// //     const classes = useStyles();

// //     return (
// //       <div className={classes.root}>
// //         <button
// //           onClick={this.addItem.bind(this)}> Add to Cart
// //         </button>
// //     </div>
// //   );
// // }




// // // class AddItem extends React.Component {
// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {quantity: 1}
// // //   }
// // //   render(){
// // //     const { product } = this.props;
// // //     return (
// // //       <div className="card" style={{ marginBottom: "10px"}}>
// // //         <div className="card-body">
// // //           <h4 className="card-title">{product.name}</h4>
// // //           <h5 className="card-text"><small>price: </small>${product.price}</h5>
// // //           <span className="card-text text-success">
// // //               <small>Quantity: </small>{product.qty}</span>
// // //           <button className="btn btn-sm btn-warning float-right"
// // //               onClick={() => this.props.remove(product)}>Remove from cart</button>
// // //         </div>
// // //       </div>
// // //      )
// // //   }
// // // }

// // // export default AddItem;