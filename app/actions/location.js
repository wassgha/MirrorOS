import axios from 'axios';
import { GOOGLE_GEOCODING_ADDRESS,
         GOOGLE_API_KEY } from '../const';

export function loadPosition(position) {
  return {
    type: 'LOCATION_RETRIEVED',
    payload: position
  };
}

export function loadFormattedAddress(response) {
  return {
    type: 'ADDRESS_RETRIEVED',
    payload: response
  };
}

export function generateLocation() {
  return (dispatch, getState) => {
    new Promise((resolve, reject) => {
      const getCurrentPosition = function (callback) {
        $.get('https://maps.googleapis.com/maps/api/browserlocation/json?browser=chromium&sensor=true', data => {
          const position = {
            coords: {
              latitude: data.location.lat,
              longitude: data.location.lng
            }
          };
          callback(position);
        });
      };
      getCurrentPosition(resolve, reject);
    })
    .then((position) => {
      dispatch(loadPosition(position))
      return axios.get(GOOGLE_GEOCODING_ADDRESS, {
        params: {
          latlng: `${position.coords.latitude}, ${position.coords.longitude}`,
          key: GOOGLE_API_KEY,
          result_type: 'country|administrative_area_level_1'
        }
      }).then(response => dispatch(
          loadFormattedAddress(response.data.results[0].formatted_address)
      ), (error) => {
        console.log(error);
      });
    }, (error) => console.log(error));
  };
}
