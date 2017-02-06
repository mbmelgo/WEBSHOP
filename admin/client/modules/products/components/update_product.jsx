import React from 'react';

class UpdateProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  update(e){
    e.preventDefault();
    const {updateProduct, productDetails} = this.props;
    const {productName, productDescription, productPrice,
           productImage, productCategory, isFeatured, removeProductImage} = this.refs
    const {_id, image} = productDetails;
    updateProduct(
      _id,
      productName.value,
      productDescription.value,
      productPrice.value,
      productImage,
      productCategory.value,
      isFeatured.checked,
      removeProductImage.checked,
      image
    );
  }

  componentDidMount(){
    const {productDetails} = this.props;
    const {productCategory} = this.refs;
    productCategory.value = productDetails.category_id;

  }

  onCancelClick(e){
    e.preventDefault();
    const {cancel} = this.props;
    cancel();
  }

  componentWillUnmount(){
    const {clearUpdateProductErrors} = this.props;
    clearUpdateProductErrors();
  }

  render() {
    const {productDetails,categories, error} = this.props;
    const {name,description,price,
          image,isFeatured} = productDetails;
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">Update Product</div>
        {!!error && <p style={{color: 'red'}}>{error}</p>}
        <div className='panel-body'>
          <form className="form-horizontal" role="form">
            <fieldset>
              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='productName'>Product Name</label>
                <div className='col-sm-9'>
                  <input ref='productName' name='productName' type='productName' placeholder='Product Name' className='form-control' defaultValue={name}/>
                </div>
                {!!error && (error === ('Name is required.')) && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='productDescription'>Product Description</label>
                <div className='col-sm-9'>
                  <input ref='productDescription' name='productDescription' type='productDescription' placeholder='Product Description' className='form-control' defaultValue={description}/>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='productPrice'>Product Price</label>
                <div className='col-sm-9'>
                  <input ref='productPrice' name='productPrice' type='productPrice' placeholder='Product Price' className='form-control' defaultValue={price}/>
                </div>
                {!!error && (error === ('Price is required.')) && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='productImage'>Product Image</label>
                <div className='col-sm-3'>
                  <label className="btn btn-default btn-file">
                    Browse <input type="file" className='image' ref='productImage' defaultValue={image}/>
                  </label>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='removeProductImage'>Remove Image?</label>
                <div className='col-sm-3'>
                  <label className="chkbox btn-default btn-file">
                    <input type="checkbox"  ref='removeProductImage'/>
                  </label>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='isFeatured'>Featured?</label>
                <div className='col-sm-3'>
                  <label className="chkbox btn-default btn-file">
                    <input type="checkbox"  ref='isFeatured' defaultChecked={isFeatured}/>
                  </label>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='productCategory'>Product Category</label>
                <div className=' col-sm-9'>
                <select className="selectpicker form-control" name="category_id" ref='productCategory'>
                   {
                     categories ? categories.map(category => (
                         <option key={category._id} value={category._id} >
                           {category.name}
                         </option>
                     )) : 'No category available'
                   }
                 </select>
                </div>
              </div>

              <div className='form-group'>
                <div className="col-xs-6 col-sm-4"></div>
                <div className="col-xs-3 col-sm-2">
                  <button className='btn btn-primary' onClick={this.update.bind(this)}>Update Product</button>
                </div>
                <div className="col-xs-3 col-sm-2">
                  <button className='btn btn-primary' onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </div>
                <div className="col-xs-6 col-sm-4"></div>
              </div>

            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateProduct;
