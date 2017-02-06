import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCartItems(product){
    const {name, price} = product;
    return (
      <tr key={product._id} >
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }

  render() {
    const {items, total} = this.props.cart;
    const items_ctr = Object.keys(items).length;
    return (
        <div className="container">
          <h3>Shopping Cart</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
            </thead>
            {items_ctr > 0 ?
              <tbody>
                {items.map((product) => {
                  return this.renderCartItems(product)
                })}
                <tr className="success">
                  <td>Total</td>
                  <td>{total}</td>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="/checkout"><button className="btn btn-info">Checkout</button></a></td>
                </tr>
              </tbody>
              :
              <thead>
                <tr >
                  <td colSpan="2">Shopping Cart empty!</td>
                </tr>
              </thead>
            }
          </table>
        </div>
    );
  }
}

export default ShoppingCart;
