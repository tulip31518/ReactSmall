import React, { Component } from 'react';
import '../components/Projects.css';
import Projectitem from './projectitem';

class Projects extends Component {
  render() {
    let projectitem;
    if(this.props.projects)
    {
      projectitem = this.props.projects.map(project => {
        return (<Projectitem key = {project.title} project={project} />);
      })
    }
    
    return (
      <div className="Projects">
        {projectitem}
      </div>
    );
  }
}

export default Projects;
