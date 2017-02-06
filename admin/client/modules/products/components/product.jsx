import React from 'react';

class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  delete(e){
    e.preventDefault();
    const {removeProduct,productDetails} = this.props;
    const {_id} = productDetails;
    removeProduct(_id);
  }


  render() {
    const {productDetails, category} = this.props;
    if(productDetails) {
      const {_id, name, description, price, image, createdAt} = productDetails;
      return (
        <div className="col-xs-6 col-md-3">
          <div className='thumbnail'>
             <div className='dropdown col-md-offset-11'>
               <a href="#" className="dropdown-toggle"
                 data-toggle="dropdown" role="button"
                 aria-haspopup="true" aria-expanded="false">
                <span className="caret"></span></a>
               <ul className="dropdown-menu">
                 <li><a href="#" onClick={this.delete.bind(this)}>Delete</a></li>
                 <li><a href={`/admin/update/product/${_id}`}>Update</a></li>
               </ul>
             </div>
            { image ?
              <img className='img-rounded' src={image}></img> :
              <img className='img-rounded' src='http://dummyimage.com/240x240/d0d9e0/858585&text=No+Image+Available'></img>
            }
            <div className='caption'>
              <a href={`/admin/view/product/${_id}`}>{name}</a>
              <h5>Price: {price}</h5>
              <h5>Category: {category.name}</h5>
              <p>{description}</p>
              <p>{createdAt.toString()}</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div></div>
    )
  }
}

export default Product;
