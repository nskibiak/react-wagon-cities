import React from 'react';
import './App.css';
import ActiveCity from './containers/active_city';
import CityList from './containers/city_list';
import cities from './data/cities';

function App() {
  return (
    <div className='app'>
      <CityList cities={cities} />
      <ActiveCity city={cities[0]} />
    </div>
  );
}

export default App;
