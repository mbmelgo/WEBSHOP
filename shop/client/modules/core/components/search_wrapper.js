import React from 'react';

import Featured from './featured';
import SideDir from './side_dir';
import ShoppingCart from '../../counter/components/shopping_cart';


class SearchWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    const {LocalState} = this.props;
    LocalState.set('LIMIT', undefined); // test
  }

  render() {
    const {prod_result, cat_result, cart, categories, searchTerm, loadMore, loadMoreCategories} = this.props;
    return (
      <div>

        <div className="side-dir">
            <SideDir categories={categories} />
        </div>

        <div className="cart-widget">
          <ShoppingCart cart={cart} />
        </div>

        <div className="featured">
          <Featured prods={prod_result} loadMore={loadMore} title={`Search Results for '${searchTerm.searchTerm}' in Products`} type="success" a="" t={1}/>
        </div>

        <div className="featured">
          <Featured prods={cat_result} loadMore={loadMoreCategories} title={`Search Results for '${searchTerm.searchTerm}' in Categories`} type="info" t={0}/>
        </div>

      </div>
    );
  }
}

export default SearchWrapper;
