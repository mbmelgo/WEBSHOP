import React from 'react';
import Product from '../containers/product.js';

class ListProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  search(e){
    e.preventDefault();
    const {searchedItem} = this.refs;
    const {search} = this.props;
    search(searchedItem.value);
  }

  loadMore(e){
    e.preventDefault();
    const {loadMore} = this.props;
    loadMore();
  }

  componentWillUnmount(){
    const {LocalState} = this.props;
    LocalState.set({
      productList: undefined,
      productLimit: 5,
      searchProductName: ' ',
    });
  }

  render() {
    const {products} = this.props;
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">
          <div className='row'>
            <div className='header col-lg-6'>
              Product List
            </div>
            <div className='col-lg-6'>
              <div className='input-group'>
                <input type='text' className='form-control' placeholder='Search' ref="searchedItem"/>
                <span className='input-group-btn'>
                  <button className="btn btn-default" type="button" onClick={this.search.bind(this)}>
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='panel-body'>
        {
            products.length > 0 ?
              products.map(product => (<Product key={product._id} productId={product._id}/>))
              : <div>No Product Available</div>
        }
        <div className='col col-md-12'>
            <button className='btn LoadMore btn-primary' onClick={this.loadMore.bind(this)}>Load More</button>
        </div>
        </div>
      </div>
    );
  }
}

export default ListProduct;
