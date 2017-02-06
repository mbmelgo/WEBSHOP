import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }


  onClickHandler(e){
    e.preventDefault();
    const {create, error} = this.props;
    const {name, address, cardName, cardNumber, cardCVV, email, password} = this.refs;
    create(
      name.value,
      address.value,
      cardName.value,
      cardNumber.value,
      cardCVV.value,
      email.value,
      password.value
    );
    if(error)  {
      name.value = '';
      address.value = '';
      cardName.value = '';
      cardNumber.value = '';
      cardCVV.value = '';
      email.value = '';
      password.value = '';
    }
  }

  render() {
    const {error} = this.props;
    return (
      <div className="container-fluid">
      <br />
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-3">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1>Sign Up</h1>
                {!!error && <p style={{color: 'red'}}>Check Form</p>}
              </div>
              <div className="panel-body">
                <form className="form-horizontal" role="form">
                  <fieldset>

                    <legend>Basic Info</legend>
                    <div className='form-group'>
                      <label className='col-sm-2 control-label' htmlFor='name'>Name</label>
                      <div className='col-sm-9'>
                        <input ref='name' name='name' type='text' placeholder='Name' className='form-control'/>
                      </div>
                      {!!error && (error === ('Name is required.'))
                      && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
                    </div>
                    <div className='form-group'>
                      <label className='col-sm-2 control-label' htmlFor='address'>Address</label>
                      <div className='col-sm-9'>
                        <input ref='address' name='address' type='text' placeholder='Address' className='form-control'/>
                      </div>
                      {!!error && (error === ('Address is required.'))
                      && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
                    </div>

                    <legend>Payment Info</legend>
                    <div className='form-group'>
                      <label className='col-sm-2 control-label' htmlFor='cardName'>Name on Card</label>
                      <div className='col-sm-9'>
                        <input ref='cardName' name='cardName' type='text' placeholder="Card Holder's Name" className='form-control'/>
                      </div>
                      {!!error && (error === ('Name on Card is required.'))
                      && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
                    </div>
                    <div className='form-group'>
                      <label className='col-sm-2 control-label' htmlFor='cardNumber'>Card Number</label>
                      <div className='col-sm-9'>
                        <input ref='cardNumber' name='cardNumber' type='text' placeholder='Credit Card Number' className='form-control'/>
                      </div>
                      {!!error && (error === ('Credit Card Number is required.'))
                      && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
                    </div>
                    <div className='form-group'>
                      <label className='col-sm-2 control-label' htmlFor='cardCVV'>Card CVV</label>
                      <div className='col-sm-9'>
                        <input ref='cardCVV' name='cardCVV' type='text' placeholder='Security Code' className='form-control'/>
                      </div>
                      {!!error && (error === ('Card Security Code is required.'))
                      && <span className="glyphicon glyphicon-exclamation-sign col-sm-1" aria-hidden="true" style={{color: 'red'}}></span>}
                    </div>

                    <legend>Account Info</legend>
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
                        <button type="button" className="btn btn-primary" onClick={this.onClickHandler.bind(this)}>Sign Up</button>
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

export default SignUp;
