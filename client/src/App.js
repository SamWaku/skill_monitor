import React, { Component } from 'react';
import SkillList from './components/SkillList';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import { Provider  } from 'react-redux';
import store from './store';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar/>
      <Container>
        <ItemModal/>
        <SkillList/>
      </Container>
    </div>
    </Provider>
   );
  }   
}

export default App;
