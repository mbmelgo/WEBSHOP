import React from 'react';
import NavBar , {NavBarLogOut} from './nav_bar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {content, user, FlowRouter} = this.props;
    return (
      <div>
        {Meteor.userId() ? <NavBar  user={user} FlowRouter={FlowRouter}/>  : <NavBarLogOut />}
        <div className='body' >
          {content()}
        </div>
      </div>
    );
  }

}

export default App;
