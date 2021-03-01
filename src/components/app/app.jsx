import React, { useEffect } from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Favorites from '../favorites/favorites';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import Property from '../property/property';
import Login from '../login/login';
import {offerType} from '../../propTypes/cities';
import {reviewsType} from '../../propTypes/reviews';
import {connect} from 'react-redux';
import { fetchOffersList } from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';


const App = (props) => {
  const {offers, reviews, onLoadData, isDataLoaded} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
     <LoadingScreen/>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main offers={offers}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/offer/:id"
          render={({match}) => {
            const {id} = match.params;
            const offer = offers.find((item) => item.id === +id);
            const cardReviews = reviews.filter((item) => item.id === +id);
            return <Property offer={offer} cardReviews={cardReviews}/>
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
  offers: PropTypes.arrayOf(offerType),
  reviews: PropTypes.arrayOf(reviewsType),
};


const mapStateToProps = (state) => ({
  offers: state.offers,
  isDataLoaded: state.isDataLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
