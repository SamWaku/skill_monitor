import React, { Component } from 'react';
import Skill_List from './components/SkillList';
import AppNavbar from './components/AppNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <AppNavbar/>
      <Skill_List/>
    </div>
   );
  }   
}

export default App;
