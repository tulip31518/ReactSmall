import React, { Component } from 'react';
import './App.css';
import Projects from './components/Projects';
import AddProject from './components/AddProject';

class App extends Component {
  constructor()
  {  
    super();
    this.state = {
      projects:[]
    }
  }

  componentWillMount()
  {
    this.setState({
      projects:[
        {
          title:    'Business website',
          category: 'Web design'
        },
        {
          title:    'Social app',
          category: 'Mobile Programming'
        },
        {
          title:    'Fitness App',
          category: 'Web Excecise'
        }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
