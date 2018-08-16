import React, { Component } from 'react';

class Projectitem extends Component {
  render() {
    
    return (
      <li className="Projects">
        {this.props.project.title} - {this.props.project.category}
      </li>
    );
  }
}

export default Projectitem;