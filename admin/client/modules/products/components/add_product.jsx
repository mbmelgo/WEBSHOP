import React from 'react';

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  onAddProduct(e){
    e.preventDefault();
    const {addProduct} = this.props;
    const {productName, productDescription, productPrice,
           productImage, productCategory, isFeatured} = this.refs;
    addProduct(
      productName.value,
      productDescription.value,
      productPrice.value,
      productImage.files[0],
      productCategory.value,
      isFeatured.checked
    );
  }

  onCancelClick(e){
    e.preventDefault();
    const {cancel} = this.props;
    cancel();
  }

  componentWillUnmount(){
    const {clearAddProductErrors} = this.props;
    clearAddProductErrors();
  }

  render() {
    const {error, categories} = this.props;

    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">Add Product</div>
        {!!error && <p style={{color: 'red'}}>{error}</p>}
        <div className='panel-body'>
          <form className="form-horizontal" role="form">
            <fieldset>
              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='productName'>Product Name</label>
                <div className='col-sm-9'>
                  <input ref='productName' name='productName' type='productName' placeholder='Product Name' className='form-control'/>
                </div>
                {!!error && (error === ('Name is required.'))
                && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='productDescription'>Product Description</label>
                <div className='col-sm-9'>
                  <input ref='productDescription' name='productDescription' type='productDescription' placeholder='Product Description' className='form-control'/>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='productPrice'>Product Price</label>
                <div className='col-sm-9'>
                  <input ref='productPrice' name='productPrice' type='productPrice' placeholder='Product Price' className='form-control'/>
                </div>
                {!!error && (error === ('Price is required.'))
                && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='productImage'>Product Image</label>
                <div className='col-sm-3'>
                  <label className="btn btn-default btn-file">
                    Browse <input type="file" className='image' ref='productImage'/>
                  </label>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='isFeatured'>Featured?</label>
                <div className='col-sm-3'>
                  <label className="chkbox btn-default btn-file">
                    <input type="checkbox"  ref='isFeatured'/>
                  </label>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='productCategory'>Product Category</label>
                <div className=' col-sm-9'>
                  <select className="selectpicker form-control" name="category_id" ref='productCategory'>
                   <option value="selectCategory" defaultValue="selected" >Select a Category</option>
                   {
                     categories ? categories.map(category => (
                       <option key={category._id} value={category._id} >
                         {category.name}
                       </option>
                     )) : 'No category available'
                   }
                 </select>
                </div>
                {!!error && (error === ('Category is required.'))
                && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
              </div>

              <div className='form-group'>
                <div className="col-xs-6 col-sm-4"></div>
                <div className="col-xs-3 col-sm-2">
                  <button className='btn btn-primary' onClick={this.onAddProduct.bind(this)}>Add Product</button>
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

export default AddProduct;
