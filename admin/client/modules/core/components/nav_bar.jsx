import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props;
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='/admin/home/'>
              theShop | Admin
            </a>
          </div>
          <div className='nav navbar-nav navbar-right'>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle"
                data-toggle="dropdown" role="button"
                aria-haspopup="true" aria-expanded="false">
              {!!user && user.profile.name} <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    );
  }

  logout(){
    Meteor.logout();
    const {FlowRouter} = this.props;
    FlowRouter.go('/admin/');
  }

}

export const NavBarLogOut = () => (
  <nav className='navbar navbar-default navbar-fixed-top'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <a className='navbar-brand' href='/admin/'>
          theShop | Admin
        </a>
      </div>
      <div className='nav navbar-nav navbar-right'>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle"
            data-toggle="dropdown" role="button"
            aria-haspopup="true" aria-expanded="false">
            Login/SignUp <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="/admin/">Login</a></li>
            <li><a href="/admin/signup">Sign-up</a></li>
          </ul>
        </li>
      </div>
    </div>
  </nav>
);

export default NavBar;
