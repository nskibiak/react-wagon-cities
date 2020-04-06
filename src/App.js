import React from 'react';
import './App.css';
import CityList from './containers/city_list';
import cities from './data/cities';

function App() {
  return (
    <div className='app'>
      <CityList cities={cities} />
      <div class="active-city"></div>
    </div>
  );
}

export default App;
