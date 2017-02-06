import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
  }


  delete(e){
    e.preventDefault();
    const {removeCategory,categoryDetails} = this.props;
    const {_id} = categoryDetails;
    removeCategory(_id);
  }

  render() {
    const {categoryDetails} = this.props;
    if(categoryDetails) {
      const {_id, name, image, createdAt} = categoryDetails;
      return (
        <div className="col-xs-6 col-md-3">
          <div className='thumbnail'>
             <div className='dropdown col-md-offset-11'>
               <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="caret"></span>
               </a>
               <ul className="dropdown-menu">
                 <li><a href="#" onClick={this.delete.bind(this)}>Delete</a></li>
                 <li><a href={`/admin/update/category/${_id}`}>Update</a></li>
               </ul>
             </div>
             { image ?
              <img className='img-rounded' src={image}></img> :
              <img className='img-rounded' src='http://dummyimage.com/240x240/d0d9e0/858585&text=No+Image+Available'></img>
             }
            <div className='caption'>
              <a href={`/admin/view/category/${_id}`}>{name}</a>
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

export default Category;
