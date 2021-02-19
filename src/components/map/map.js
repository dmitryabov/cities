import React, {useEffect, useRef} from "react";
import leaflet from "leaflet";

import PropTypes from "prop-types";
import {offerType} from "../../propTypes/cities";

import "leaflet/dist/leaflet.css";

const MapOffers = ({offers, classNameMap}) => {
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
      iconSize: [30, 30],
    });

    offers.forEach((elem) => {
      leaflet
        .marker(
            {
              lat: elem.location.latitude,
              lng: elem.location.longitude,
            },
            {icon}
        )
        .addTo(mapRef.current);
    });
    return () => {
      mapRef.current.remove();
    };
  }, [offers]);

  return (
    <section className={`${classNameMap} map`} id="map" ref={mapRef}></section>
  );
};

MapOffers.propTypes = {
  offers: PropTypes.arrayOf(offerType),
  classNameMap: PropTypes.string,
};

export default MapOffers;
