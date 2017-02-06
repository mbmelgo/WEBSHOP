import React from 'react';
import SideDir from './side_dir';
import FeaturedList from './featured';
import ShoppingCart from '../../counter/components/shopping_cart';

class FeatureWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    const {LocalState} = this.props;
    LocalState.set('LIMIT', undefined); // test
  }

  render() {
    const {prods, categories, cart, loadMore} = this.props;
    return (
      <div>
          <div className="side-dir">
              <SideDir categories={categories} />
          </div>

          <div className="cart-widget">
            <ShoppingCart cart={cart} />
          </div>

          <div className="featured">
            <FeaturedList prods={prods} loadMore={loadMore} title="Feature Products list" type="primary" t={1} />
          </div>

      </div>
    );
  }
}

export default FeatureWrapper;
