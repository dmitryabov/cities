import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';
import Login from '../login/login';


const App = (props) => {
  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesCount={placesCount}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/property">
          <Property />
        </Route>
        <Route>
           <NotFoundScreen/>
        </Route>
        <Route>
           <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
