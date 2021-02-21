import React, { useState } from 'react';
import {PlacesOptions} from '../../const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


const PlacesSorting = ({placesOptionActive, onActiveOption}) => {

  const [placesOption, setPlacesOption] = useState(false)

  const formHoverHandler = () => {
    setPlacesOption(!placesOption)
  }


  return (
    <form className="places__sorting" action="#" method="get" onMouseEnter={formHoverHandler} onMouseLeave={formHoverHandler}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
                  {placesOptionActive}
        <svg className="places__sorting-arrow" width="7" height="4">
          <a href="#icon-arrow-select"></a>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${placesOption && `places__options--opened`}`} >
        {PlacesOptions.map((PlacesOption, i) => {
           const placeOptionClickHandler = () => {
            onActiveOption(PlacesOption)
          }
          return (
             <li  className={`places__option ${placesOptionActive === i && `places__option--active`}`} tabIndex="0" key={PlacesOption + i} onClick={placeOptionClickHandler}>{PlacesOption}</li>
          )
        })}
      </ul>
    </form>
  );
};


const mapStateToProps = (state) => ({
  placesOptionActive: state.placesOptionActive,
});

const mapDispatchToProps = (dispatch) => ({
  onActiveOption(activeOption) {
    dispatch(ActionCreator.changeActiveOption(activeOption));
  },
});


export {PlacesSorting};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesSorting);
