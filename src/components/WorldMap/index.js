/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

//Relative path imports
import { showDataOnMap } from '../../helpers/index';


const WorldMap = ({countries, casesType, center, zoom}) => {

  return (
    <React.Fragment>
      <Box sx={{ 
        height: '600px',
        '.leaflet-container': {
          height: '100%'
        }
      }}>
        <Map center={center} zoom={zoom}>
          <TileLayer
            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {showDataOnMap(countries, casesType)}
        </Map>
      </Box>
    </React.Fragment>
  );
}

export default WorldMap;
