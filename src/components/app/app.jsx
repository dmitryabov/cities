import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';
import Login from '../login/login';
import {offerType} from '../../propTypes/cities';
import {reviewsType} from '../../propTypes/reviews';


const App = (props) => {
  const {placesCount, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main placesCount={placesCount} offers={offers}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites offers={offers}/>
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => {
            const {id} = match.params;
            const offer = offers.find((item) => item.id === +id);
            const cardReviews = reviews.filter((item) => item.id === +id);
            return <Property offer={offer} cardReviews={cardReviews} offers={offers}/>
            ;
          }}>
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
  offers: PropTypes.arrayOf(offerType),
  reviews: PropTypes.arrayOf(reviewsType),
};

export default App;
