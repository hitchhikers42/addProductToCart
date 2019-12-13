import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import App from './App.jsx';
const faker = require('faker');

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
    position: 'relative',
    display: 'flex',
    minWidth: 0,
    minHeight: 0,
    height: 600,
    maxWidth: 600,
    maxHeight: 600,
    // margin: '2%',
    right: '1%',
    left: '1%',
    top: '20%',
    //bottom: '0',
    backgroundColor: theme.palette.background.paper,
    //border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
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

  const buttonStyle = {
    padding: "5px 30px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "rgb(255, 255, 255)"
  }

  return (
    <div>

      <button className="modalCart"
        type="button"
        onClick={handleOpen}
        style={buttonStyle}>
        🛒
      </button>

      <Modal aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}>

        <div className={classes.paper} style={modalStyle}>

          <table>

            <tbody>
              <tr>
                {/* table 1 - 1 row 3 columns */}
                <td>
                  <div className="modalHeader">Added to Cart</div>
                </td>
                <td>
                  {/* blank */}
                </td>
                <td>
                  <div className="modalHeader">Cart Summary</div>
                </td>
              </tr>
            </tbody>

            <tbody>
              {/* table 2 - 1 row 3 columns */}
              <tr>
                <td>
                  <div className="modalImage">
                    <img id="simple-modal-title" src={`${faker.image.image()}`} />
                  </div>
                </td>
                <td>
                  {/* blank */}
                </td>
                <td>
                  <p id="modalQty" className="currentItem"> ____ item(s): $777.77</p>
                </td>
              </tr>
            </tbody>

            <tbody>
              {/* table 3 - 3 row 2 columns */}
              <tr>
                <td>
                  <p className="currentItem" id="simple-modal-description">Item in 🛒: <span className="itemName">{ faker.commerce.productName() } </span></p>
                </td>
                <td>
                  {/* blank */}
                </td>
                <td>
                  {/* blank */}
                </td>
              </tr>
              <tr>
                <td className="currentItem">
                  Stainless Steel
                </td>
                <td>
                  {/* blank */}
                </td>
                <td>
                  {/* blank */}
                </td>
              </tr>
              <tr>
                <td>
                  <p id="modalQty" className="currentItem"> Quantity __</p>
                </td>
                <td>
                  {/* blank */}
                </td>
                <td>
                  {/* blank */}
                </td>
              </tr>
            </tbody>

            <tbody>
              {/* table 4 - 1 row 2 columns */}
              <tr>
                <td>
                  <button className="keepShopping" onClick={handleClose}>Keep Shopping</button>
                </td>
                <td>
                  {/* blank */}
                </td>
                <td>
                  <button className="checkout" onClick={handleClose}>View Cart & Checkout</button>
                </td>
              </tr>
            </tbody>

          </table>

        </div>
      </Modal>

    </div>
  );
}

