import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/index'
import { HomePage } from './pages/homePage';
import { FilmDetails } from './components/filmDetails';


function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/filmsList">
        <Switch>
          <Route exect path='/FilmsList' component={HomePage} />
          <Route path='/movieDetales/:id' component={FilmDetails} />
          <Redirect to="/FilmsList" />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
