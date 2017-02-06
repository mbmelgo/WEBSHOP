import React from 'react';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  addToCart(event){
    event.preventDefault();
    const {addToCart} = this.props;
    const {name, price} = this.props.product;
    addToCart(name,price);
  }

  addAndCheckout(event){
    event.preventDefault();
    const {addAndCheckout} = this.props;
    const {name, price} = this.props.product;
    addAndCheckout(name,price);
  }

  render() {
    const {name, img, description,
      price, viewCount} = this.props.product;
    return (
      <div>
        <div className="prod-overview">
          <img src={img?img:'http://dummyimage.com/240x240/d0d9e0/858585&text=No+Image+Available' } alt={name} />
          <div className="caption">
            <h3>{name}</h3>
            <h4>Price: P{price}</h4>
            <h5>Description: {description}</h5>
            <h5>View count: {viewCount}</h5>
            <p>
              <button className="btn btn-primary" role="button" onClick={this.addToCart.bind(this)}>
                Add to Cart </button>&nbsp;&nbsp;
              <button className="btn btn-primary" role="button" onClick={this.addAndCheckout.bind(this)}>Checkout</button>&nbsp;&nbsp;&nbsp;
              <a href="/"><button className="btn btn-warning" role="button">Back</button></a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
