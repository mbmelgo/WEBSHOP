import React from 'react';

import Home from '../containers/home.js';

class HomeWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {content} = this.props;
    return (
      <div>
        <div className='control-panel col-sm-3 col-xs-6'>
          <Home />
        </div>
        <div className='control-panel col-sm-9'>
          {content}
        </div>
      </div>
    );
  }
}

export default HomeWrapper;
