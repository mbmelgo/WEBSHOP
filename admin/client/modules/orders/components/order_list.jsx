import React from 'react';
import Order from '../containers/order.js';

class OrderList extends React.Component {
  constructor(props) {
    super(props);
  }

  search(e){
    e.preventDefault();
    const {searchedItem} = this.refs;
    const {searchCategory} = this.props;
    searchCategory(searchedItem.value);
    this.forceUpdate();
  }

  loadMore(e){
    e.preventDefault();
    const {loadMore} = this.props;
    loadMore();
  }

  componentWillUnmount(){
      const {LocalState} = this.props;
      LocalState.set({
        orderList: undefined,
        orderLimit: 3
      });
  }

  render() {
    const {orderList} = this.props;
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">
          <div className='row'>
            <div className='header col-lg-12'>
              Orders List
            </div>
          </div>
        </div>
        <div className='panel-body'>
          <div className="list-group">
            <a className="list-group-item active col-md-12">
              <h5 className='col-md-2'>First Name</h5>
              <h5 className='col-md-2'>Last Name</h5>
              <h5 className='col-md-4'>Email</h5>
              <h5 className='col-md-2'>Total</h5>
              <h5 className='col-md-2'>Ship Order</h5>
            </a>
              {
                orderList.length > 0 ?
                orderList.map(order => (<Order key={order._id} orderId={order._id}/>))
                  : <a>No Orders Available</a>
              }
          </div>
        <div className='col col-md-12'>
          <br />
          <button className='btn LoadMore btn-primary' onClick={this.loadMore.bind(this)}>Load More</button>
        </div>
        </div>
      </div>
    );
  }
}

export default OrderList;
