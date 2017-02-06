import React from 'react';
import SideDir from './side_dir';
import MViewedList from './featured';
import ShoppingCart from '../../counter/components/shopping_cart';


class MviewedWrapper extends React.Component {
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
            <MViewedList prods={prods} loadMore={loadMore} title="Most Viewed Products" type="success" t={1} />
          </div>

      </div>
    );
  }
}

export default MviewedWrapper;
