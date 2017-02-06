import React from 'react';

class SideDir extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {categories} = this.props;
    return (
      <div className="container">
        <ul className="list-group">
          <h3>Product Directory</h3>
          <li className="list-group-item">
              <a href={`/browseBy/All`}>All</a>
          </li>
          {categories.map((cat) => {
            return <li key={cat._id} className="list-group-item">
              <a href={`/browseBy/${cat.name}`}>{cat.name}</a>
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default SideDir;
