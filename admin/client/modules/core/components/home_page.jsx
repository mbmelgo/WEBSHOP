import React from 'react';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {adminDetails} = this.props;
    return (
      <div className='panel panel-primary'>
        <div className="panel-heading">
          <div className='row'>
            <div className='header col-lg-12'>
              Welcome!
            </div>
          </div>
        </div>
        <div className='panel-body'>
          <div className="row">
            <div className="col-sm-12">
              <div className="thumbnail">
                <img className='avatar' src="http://goo.gl/eBcmv8"/>
                <div className="caption-home">
                {adminDetails ? <h3>{adminDetails.name}</h3>:<h3>Loading</h3>}
                {adminDetails ? <h4>{adminDetails.address}</h4>:<h4>Loading</h4>}
                {adminDetails ? <h4>{adminDetails.email}</h4>:<h4>Loading</h4>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
