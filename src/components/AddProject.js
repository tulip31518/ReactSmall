import React, { Component } from 'react';

class AddProject extends Component {
  
  static defaultProps = {
    categories:['web design', 'web development', 'Programming']
  }
  
  render() {    
    let categoryitems = this.props.categories.map(category =>{
      return <option key='category' value='category'>{category}</option>
    });
    return (
      <div className="Projects">
        <h3>AddProject</h3>
        <form>
            <div>
              <label>Title</label><br/>
              <input type = 'text' ref = 'title'/>
            </div>
            <div>
              <label>Category</label><br/>
              <select ref = 'category'>
                  {categoryitems}
              </select>
            </div>
        </form>
        
      </div>
    );
  }
}

export default AddProject;
