import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event){
    event.preventDefault();
    const {search} = this.props;
    const query = document.getElementById("query").value;
    search(query);
  }

  render() {
    const {content} = this.props;
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-default center">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                  aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">theShop</a>
            </div>
            <div className="collapse navbar-collapse">
              <form className="navbar-form navbar-left" role="search" id="search">
                <div className="form-group">
                  <input type="text" id="query" className="form-control" onSubmit={this.handleSubmit.bind(this)} placeholder="Search anything..."/>
                </div>
                <button type="submit" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>Submit</button>
              </form>
            </div>
          </div>
        </nav>
        <div>{content()}</div>
      </div>

    );
  }
}

export default App;
