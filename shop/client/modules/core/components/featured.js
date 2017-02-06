import React from 'react';
import Thumbnails from '../../products/components/thumbnails';

import FlipMove from 'react-flip-move';

class Featured extends React.Component {
  constructor(props) {
    super(props);
  }

  // this is the container for the lists
  render() {
    const results = this.props.prods.length;
    return (
      <div className="container">
        {results > 0 ? this.displayResults() : this.emptyResults()}
      </div>
    );
  }

  loadMore(event){
    event.preventDefault();
    const {loadMore} = this.props;
    loadMore();
  }

  displayResults(){
      return (  <div className={`panel panel-${this.props.type}`}>
            <div className="panel-heading">{this.props.title}</div>
            <div className="panel-body">
                <FlipMove className="panel-body" enterAnimation="fade" leaveAnimation="accordianHorizontal" duration="500">
                {this.props.prods.map((product) =>
                    <Thumbnails key={product._id} product={product} t={this.props.t} />)
                 }
                 {this.props.extra ?
                   <div className="thumbnail">
                     <a href={this.props.a}>
                       <img src="http://dummyimage.com/240x240/000/fff.png&text=+0x2B+" alt="Fjords" width="300" height="200"/>
                     </a>
                   </div> :
                   <div className="thumbnail">
                     <img onClick={this.loadMore.bind(this)} src="http://dummyimage.com/240x240/000/fff.png&text=+0x2B+" alt="Fjords" width="300" height="200"/>
                   </div> }
                </FlipMove>
            </div>
        </div> )
  }

  emptyResults(){
        return (<div className={`panel panel-${this.props.type}`}>
            <div className="panel-heading">{this.props.title}</div>
            <div className="panel-body">
              <h4>No products to display</h4>
            </div>
        </div>)
  }


}

export default Featured;
