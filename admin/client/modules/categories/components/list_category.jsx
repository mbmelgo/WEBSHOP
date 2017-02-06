import React from 'react';
import Category from '../containers/category.js';

class ListCategory extends React.Component {
  constructor(props) {
    super(props);

  }

  search(e){
    e.preventDefault();
    const {searchedItem} = this.refs;
    const {search} = this.props;
    search(searchedItem.value);
  }

  loadMore(e){
    e.preventDefault();
    const {loadMore} = this.props;
    loadMore();
  }

  componentWillUnmount(){
    const {LocalState} = this.props;
    LocalState.set({
      categoryList: undefined,
      categoryLimit: 3,
      searchName: ' ',
    });
  }

  render() {
    const {categories} = this.props;
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">
          <div className='row'>
            <div className='header col-lg-6'>Category List</div>
            <div className='col-lg-6'>
              <div className='input-group'>
                <input type='text' className='form-control' placeholder='Search' ref="searchedItem"/>
                <span className='input-group-btn'>
                  <button className="btn btn-default" type="button" onClick={this.search.bind(this)}>
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='panel-body'>
          {
            categories.length > 0 ?
              categories.map(category => (<Category key={category._id} categoryId={category._id}/>))
              : <div>No Category Available</div>
          }
          <div className='col col-md-12'>
            <button className='btn LoadMore btn-primary' onClick={this.loadMore.bind(this)}>Load More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCategory;
