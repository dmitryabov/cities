import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';


const App = (props) => {
  const {placesCount} = props;

  return (
    <Main placesCount={placesCount}/>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
