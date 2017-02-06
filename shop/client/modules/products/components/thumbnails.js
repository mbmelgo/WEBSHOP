import React from 'react';

class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {product, t} = this.props;
    // make a type
    return (
      <div className="thumbnail">
        <img src={product.img ? product.img : 'http://dummyimage.com/240x240/d0d9e0/858585&text=No+Image+Available'}
            alt="product_image" className="thumb" />

          { t ?
            <div className="caption">
              <h3><a href={`/products/${product._id}`}>{product.name}</a></h3>
              <p>{product.description}</p>
              <p>Price: P{product.price}</p>
              <p>Views: {product.viewCount}</p>
            </div>
            :
            <div className="caption">
              <h3><a href={`/browseBy/${product.name}`}>{product.name}</a></h3>
            </div>
          }
      </div>
    );
  }
}

export default Thumbnails;
