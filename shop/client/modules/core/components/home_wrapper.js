import React from 'react';

import Featured from './featured';
import SideDir from './side_dir';
import ShoppingCart from '../../counter/components/shopping_cart';

class HomeWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {featured, most_viewed, categories, cart} = this.props;
    return (
      <div>
          <div className="side-dir">
              <SideDir categories={categories} />
          </div>

          <div className="cart-widget">
            <ShoppingCart cart={cart} />
          </div>

          <div className="featured">
            <Featured prods={featured} title="Featured Product" type="primary" a="/products/featured" extra={true} t={1}/>
          </div>

          <div className="most-viewed">
            <Featured prods={most_viewed} title="Most Viewed" type="success" a="/products/most-viewed" extra={true} t={1} />
          </div>
      </div>
    );
  }
}

export default HomeWrapper;
