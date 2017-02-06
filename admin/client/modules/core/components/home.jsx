import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">Control Panel</div>
        <div className='panel-body'>
          <ul className='nav nav-pills nav-stacked'>
            <li role="presentation" className="active"><a href="#">Products</a></li>
            <li role="presentation"><a href="/admin/list/product">Product List</a></li>
            <li role="presentation"><a href="/admin/add/product">Add product</a></li>
            <li role="presentation" className="active"><a href="#">Categories</a></li>
            <li role="presentation"><a href="/admin/list/category">Category List</a></li>
            <li role="presentation"><a href="/admin/add/category">Add Categories</a></li>
            <li role="presentation" className="active"><a href="#">Orders</a></li>
            <li role="presentation"><a href="/admin/list/order">Order List</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
