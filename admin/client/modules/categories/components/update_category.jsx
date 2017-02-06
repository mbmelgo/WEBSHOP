import React from 'react';

class UpdateCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  update(e){
    e.preventDefault();
    const {updateCategory, categoryDetails, LocalState} = this.props;
    const {categoryName,categoryImage,removeCategoryImage} = this.refs;
    const {_id, image} = categoryDetails;
    updateCategory(_id,categoryName.value,categoryImage, removeCategoryImage.checked, image, LocalState);
  }

  onCancelClick(e){
    e.preventDefault();
    const {cancel} = this.props;
    cancel();
  }

  componentWillUnmount(){
    const {clearUpdateCategoryErrors} = this.props;
    clearUpdateCategoryErrors();
  }

  render() {
    const {categoryDetails, error} = this.props;
    const {name,image} = categoryDetails;
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">Update Category</div>
        {!!error && <p style={{color: 'red'}}>{error}</p>}
        <div className='panel-body'>
          <form className="form-horizontal" role="form">
            <fieldset>
              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='categoryName'>Category Name</label>
                <div className='col-sm-9'>
                  <input ref='categoryName' name='productName' type='categoryName' placeholder='Category Name' className='form-control' defaultValue={name}/>
                </div>
                {!!error && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='categoryImage'>Category Image</label>
                <div className='col-sm-3'>
                  <label className="btn btn-default btn-file">
                    Browse <input type="file" className='image' ref='categoryImage' defaultValue={image}/>
                  </label>
                </div>
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='removeCategoryImage'>Remove Image?</label>
                <div className='col-sm-3'>
                  <label className="chkbox btn-default btn-file">
                    <input type="checkbox"  ref='removeCategoryImage'/>
                  </label>
                </div>
              </div>

              <div className='form-group'>
                <div className="col-xs-6 col-sm-4"></div>
                <div className="col-xs-3 col-sm-2">
                  <button className='btn btn-primary' onClick={this.update.bind(this)}>Update Category</button>
                </div>
                <div className="col-xs-3 col-sm-2">
                  <button className='btn btn-primary'  onClick={this.onCancelClick.bind(this)}>Cancel</button>
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

export default UpdateCategory;
