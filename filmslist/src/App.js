import React, { useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/index'
import {HomePage} from './pages/homePage';
import {FilmDetails} from './components/filmDetails';


function App() {
  return (
    <Provider store={store}>
      <Router >
        <Switch>
          <Route exect path ='/home' component={HomePage}/>
          <Route path ='/movieDetales/:id'  component={FilmDetails}/>
          <Redirect to="/home" />
        </Switch>      
    </Router>
    </Provider>
    
  );
}

export default App;
