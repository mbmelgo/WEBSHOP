import React from 'react';

class AddCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  onAddCategoryClick(e){
    e.preventDefault();

    const {addCategory} = this.props;
    const {categoryName, categoryImage} = this.refs;

    addCategory(
      categoryName.value,
      categoryImage.files[0]
    );
  }

  onCancelClick(e){
    e.preventDefault();
    const {cancel} = this.props;
    cancel();
  }

  componentWillUnmount(){
    const {clearAddCategoryErrors} = this.props;
    clearAddCategoryErrors();
  }

  render() {
    const {error} = this.props;
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">Add Category</div>

        {!!error && <p style={{color: 'red'}}>{error}</p>}

        <div className='panel-body'>
          <form className="form-horizontal" role="form">
            <fieldset>
              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='categoryName'>Category Name</label>
                <div className='col-sm-9'>
                  <input ref='categoryName' name='productName' type='categoryName' placeholder='Category Name' className='form-control'/>
                </div>
                {!!error && (error === ('Name is required.'))
                && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
              </div>

              <div className='form-group'>
                <label className='col-sm-2 control-label' htmlFor='categoryImage'>Category Image</label>
                <div className='col-sm-3'>
                  <label className="btn btn-default btn-file">
                    Browse <input type="file" className='image' ref='categoryImage'/>
                  </label>
                </div>
              </div>

              <div className='form-group'>
                <div className="col-xs-6 col-sm-4"></div>
                <div className="col-xs-3 col-sm-2">
                  <button className='btn btn-primary'  onClick={this.onAddCategoryClick.bind(this)}>Add Category</button>
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

export default AddCategory;
