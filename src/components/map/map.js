import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";

import PropTypes from "prop-types";
import {offerType} from "../../propTypes/cities";
import {connect} from "react-redux";

import "leaflet/dist/leaflet.css";

const MapOffers = ({offers, classNameMap, activePin}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: offers[0].city.location.latitude,
        lng: offers[0].city.location.longitude,
      },
      zoom: offers[0].city.location.zoom,
      maxWidth: 100,
    });

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(mapRef.current);

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [27, 39],
    });

    const iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [27, 39],
    });

    offers.forEach((elem) => {
      let pinIcon = icon;
      elem.id === activePin ? (pinIcon = iconActive) : (pinIcon = icon);

      leaflet
        .marker(
            {
              lat: elem.location.latitude,
              lng: elem.location.longitude,
            },
            {icon: pinIcon}
        )
        .addTo(mapRef.current);
    });
    return () => {
      mapRef.current.remove();
    };
  }, [offers, activePin]);

  return (
    <section className={`${classNameMap} map`} id="map" ref={mapRef}></section>
  );
};

MapOffers.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  classNameMap: PropTypes.string,
  activePin: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  activePin: state.activePin,
});

export {MapOffers};
export default connect(mapStateToProps, null)(MapOffers);
