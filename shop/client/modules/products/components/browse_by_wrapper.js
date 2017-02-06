import React from 'react';

import SideDir from '../../core/components/side_dir';
import Featured from '../../core/components/featured';
import ShoppingCart from '../../counter/components/shopping_cart';


class BrowseByWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    const {query} = this.props;
    this.setState({
      category: query
    });
  }

  componentWillUnmount(){
    const {LocalState} = this.props;
    LocalState.set('LIMIT', undefined); // test
  }

  // will reset limit when switched to other categories...
  componentWillReceiveProps(){
    const {query} = this.props;
    if(this.state.category !== query){
      const {LocalState} = this.props;
      LocalState.set('LIMIT', undefined); // test
      this.setState({
        category : query
      })
    }
  }

  render() {
    const {prods, categories, query, cart, loadMore} = this.props;
    return (
      <div>
          <div className="side-dir">
              <SideDir categories={categories} />
          </div>

          <div className="cart-widget">
            <ShoppingCart cart={cart} />
          </div>

          <div className="featured">
            <Featured prods={prods} loadMore={loadMore} title={query} type="primary" a="featured" t={1} />
          </div>

      </div>
    );
  }
}

export default BrowseByWrapper;
