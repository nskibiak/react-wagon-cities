import cities from '../data/cities';

export function listCities() {
  return {
    type: 'LIST_CITIES',
    payload: cities
  }
}

export function chooseCity(city) {
  return {
    type: 'CHOOSE_CITY',
    payload: city
  }
}
