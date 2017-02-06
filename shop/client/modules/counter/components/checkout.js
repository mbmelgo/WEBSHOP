import React from 'react';
import {DocHead} from 'meteor/kadira:dochead';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.setState({
      first: "",
      last: "",
      email: "",
      total: 0,
      valid: false,
    });
  }

  componentDidMount(){ //ensure script is loaded
    var gaScript = '/script/custom.js';
    DocHead.loadScript(gaScript);
  }

  render() {
    const {items, total} = this.props.cart;
    const items_ctr = Object.keys(items).length;
    return (
      <div className="container">
        <div className="row">
        <section>
                <div className="wizard">
                    {this.renderHeader()}
                    <form role="form">
                        <div className="tab-content">
                            {this.renderStepOne(items, items_ctr, total)}
                            {this.renderStepTwo()}
                            {this.renderStepThree()}
                            {this.renderComplete()}
                            <div className="clearfix"></div>
                        </div>
                    </form>
                </div>
            </section>
           </div>
        </div>
    );
  }

  // EVENT LISTENERS
  // Step One
  renderCartItems(product){
    const {name, price} = product;
    return (
      <tr key={product._id} >
        <td><span id={product._id} className="glyphicon glyphicon-remove" aria-hidden="true" onClick={this.removeItem.bind(this)}></span>&nbsp;{name}</td>
        <td>{price}</td>
      </tr>
    );
  }

  removeItem(event){
    event.preventDefault();
    const {removeItem} = this.props;
    removeItem(event.target.id)
  }

  //Step Two F'ns

  validateData(event){
    event.preventDefault();

    const {validateData} = this.props;

    const email = document.getElementById('email').value;
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;

    const formData = {email, first, last};
    const valid = validateData(formData);

    this.setState({
      first : first,
      last : last,
      email: email,
      valid : valid,
    })

  }

  //Step 3

  lastStep(){
    this.proccessTransaction();

  }

  proccessTransaction(){
    const {registerBuyer} = this.props;
    const {total} = this.props.cart;
    if(total > 0){
      registerBuyer({
        first: this.state.first,
        last: this.state.last,
        email: this.state.email,
        total: total,
        status: "",
      });
      this.overrideClick();
      this.props.clearCart();
    }
    else{
      this.setState({
        valid: false,
      })
    }

  }

  overrideClick(){
    var $active = $('.wizard .nav-tabs  li.active');
    $active.next().removeClass('disabled');
    $active.next().find('a[data-toggle="tab"]').click();
  }


  //RENDERING STUFF

  renderStepOne(items, items_ctr, total){
    return (
      <div className="tab-pane active" role="tabpanel" id="step1">
          {items_ctr > 0 ?
            <div>
              <h3>Review your items</h3>
                <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Item</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                  <tbody>
                    {items.map((product) => {
                      return this.renderCartItems(product)
                    })}
                    <tr className="success">
                      <td>Total</td>
                      <td>{total}</td>
                    </tr>
                  </tbody>
                </table>
                <ul className="list-inline pull-right">
                    <li><button type="button" className="btn btn-primary next-step">Confirm and continue</button></li>
                </ul>
              </div>
                :
                <div className="tab-pane active" role="tabpanel" id="step1">
                  <h3> ¯\_(ツ)_/¯ cart is empty bro!</h3>
                    <ul className="list-inline pull-right">
                        <a href="/"><li><button type="button" className="btn btn-primary next-step">Back to Home</button></li></a>
                    </ul>
                </div>
              }
            </div>
    );
  }

  renderStepTwo(){
    return (
      <div className="tab-pane" role="tabpanel" id="step2">
          <h3>Contact Information</h3>
          <p>This will help you track your orders</p>
              <div className="form-group">
                <label htmlFor="exampleInputName2">First Name</label>
                <input type="text" className="form-control" id="first" placeholder=""/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName2">Last Name</label>
                <input type="text" className="form-control" id="last" placeholder=""/>
              </div>
            <fieldset className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email"/>
              <small className="text-muted">We'll never share your email with anyone else.</small>
            </fieldset>
          <ul className="list-inline pull-right">
              <li><button type="button" className="btn btn-default prev-step">Previous</button></li>
              <li><button type="button" className="btn btn-primary next-step" onClick={this.validateData.bind(this)}>Save and continue</button></li>
          </ul>
      </div>
    );
  }

  renderStepThree(){
    return (
      <div className="tab-pane" role="tabpanel" id="step3">
      {this.state.valid ?
        <div>
            <h3>Reminders</h3>
            <p>We will send updates to {this.state.first} {this.state.last} with email address <b>{this.state.email}</b></p>
            <ul className="list-inline pull-right">
              <li><button type="button" className="btn btn-default prev-step">Previous</button></li>
              <li><button type="button" className="btn btn-primary next-step" onClick={this.lastStep.bind(this)}>Proceed</button></li>
            </ul>
        </div>
        :
        <div className="tab-pane" role="tabpanel" id="step3">
            <h3>Wait!</h3>
            <p>There's something wrong with your data. Please double check!</p>
            <ul className="list-inline pull-right">
                <li><button type="button" className="btn btn-default prev-step">Previous</button></li>
            </ul>
        </div>
      }
      </div>
    );
  }

  renderComplete(){
    const {LocalState} = this.props;
    return (
      <div className="tab-pane" role="tabpanel" id="complete">
        {LocalState.get('Error') === 'none' ?
          <div>
            <h3>Complete!</h3>
            <p>You have successfully placed your orders. Thank you!</p>
            <ul className="list-inline pull-right">
                <a href="/"><li><button type="button" className="btn btn-primary next-step">Back to Home</button></li></a>
            </ul>
          </div>
          :
          <div>
            <h3>Error occured!</h3>
            <p>Server says {LocalState.get('Error')}! Please retry!</p>
              <ul className="list-inline pull-right">
                  <a href="/"><li><button type="button" className="btn btn-primary next-step">Back to Home</button></li></a>
              </ul>
          </div>
          }
      </div>
    );
  }

  renderHeader(){
    return (
      <div className="wizard-inner">
          <div className="connecting-line"></div>
          <ul className="nav nav-tabs" role="tablist">

              <li role="presentation" className="active">
                  <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" title="Step 1">
                      <span className="round-tab">
                          <i className="glyphicon glyphicon-list"></i>
                      </span>
                  </a>
              </li>

              <li role="presentation" className="disabled">
                  <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
                      <span className="round-tab">
                          <i className="glyphicon glyphicon-pencil"></i>
                      </span>
                  </a>
              </li>
              <li role="presentation" className="disabled">
                  <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
                      <span className="round-tab">
                          <i className="glyphicon glyphicon-info-sign"></i>
                      </span>
                  </a>
              </li>

              <li role="presentation" className="disabled">
                  <a href="#complete" data-toggle="tab" aria-controls="complete" role="tab" title="Complete">
                      <span className="round-tab">
                          <i className="glyphicon glyphicon-ok"></i>
                      </span>
                  </a>
              </li>
          </ul>
      </div>
    );
  }
}


export default Checkout;
