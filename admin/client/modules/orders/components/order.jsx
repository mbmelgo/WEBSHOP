import React from 'react';

class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  shipOrder(e){
    e.preventDefault();
    const {shipOrder, orderDetails} = this.props;
    const {_id, first, last, email, total} = orderDetails;
    const order ={
      _id: _id,
      first: first,
      last: last,
      email: email,
      total: Number(total)
    };
    shipOrder(order);
  }

  render() {
    const {orderDetails} = this.props;
    if(orderDetails) {
      const {first, last, email, total, isShipped} = orderDetails;
      return (
        <a className='list-group-item col-md-12'>
          <h6 className='list-item col-md-2'>{first}</h6>
          <h6 className='list-item col-md-2'>{last}</h6>
          <h6 className='list-item col-md-4'>{email}</h6>
          <h6 className='list-item col-md-2'>{total}</h6>
            {isShipped ?
              <button type="button" className="btn btn-primary col-md-2" disabled="disabled" >Ship Order</button> :
              <button type="button" className="btn btn-primary col-md-2" onClick={this.shipOrder.bind(this)}>Ship Order</button>
            }
        </a>
      );
    }
    return (
      <tr><td colSpan='5'></td></tr>
    )
  }
}

export default Order;
