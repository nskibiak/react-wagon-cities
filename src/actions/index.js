import cities from '../data/cities';

export function listCities() {
  return {
    type: 'LIST_CITIES',
    payload: cities
  }
}

export function selectCity(city) {
  return {
    type: 'SELECT_CITY',
    payload: city
  }
}
