/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const WorldMap = ({center, zoom}) => {
  return (
    <React.Fragment>
      <Box sx={{ 
        height: '500px',
        '.leaflet-container': {
          height: '100%'
        }
      }}>
        <MapContainer center={center} zoom={zoom}>
          <TileLayer
            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </Box>
    </React.Fragment>
  );
}

export default WorldMap;
