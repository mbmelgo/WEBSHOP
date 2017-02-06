import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickHandler(e){
    e.preventDefault();
    const {loginUser, error} = this.props;
    const {email, password} = this.refs;

    loginUser(
      email.value,
      password.value
    );

    if(error)  {
      email.value = '';
      password.value = '';
    }
  }

  render() {
    const {error} = this.props;
    return (
      <div className="login container-fluid">
      <br />
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1>Login</h1>
                {!!error && <p style={{color: 'red'}}>Check Form</p>}
              </div>
              <div className="panel-body">
                <form className="form-horizontal" role="form">
                  <fieldset>
                    <div className='form-group'>
                      <label className='col-sm-2 control-label' htmlFor='email'>Email</label>
                      <div className='col-sm-9'>
                        <input ref='email' name='email' type='email' placeholder='Email' className='form-control'/>
                      </div>
                      {!!error && (error === ('Email is required.'))
                      && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
                    </div>
                    <div className='form-group'>
                      <label className='col-sm-2 control-label' htmlFor='password'>Password</label>
                      <div className='col-sm-9'>
                        <input ref='password' name='password' type='password' placeholder='Password' className='form-control'/>
                      </div>
                      {!!error && (error === ('Password is required.'))
                      && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
                    </div>

                    <div className='form-group'>
                      <div className='col-sm-offset-2 col-sm-9'>
                        <button type="button" className="btn btn-primary" onClick={this.onClickHandler.bind(this)}>Login</button>
                      </div>
                    </div>

                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
