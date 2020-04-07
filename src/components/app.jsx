import React, { Component } from 'react';

import ActiveCity from '../containers/active_city';
import CityList from '../containers/city_list';
// import cities from '../data/cities';

class App extends Component {
  render() {
    return (
      <div className="app">
        <CityList />
        <ActiveCity />
      </div>
    );
  }
}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       selectedCity: cities[0]
//     };
//   }

//   pickCity = (city) => {
//     this.setState({
//       selectedCity: city.city
//     });
//   }

//   render() {
//     return (
//       <div className="app">
//         <CityList cities={cities} pickCity={this.pickCity} selectedCity={this.state.selectedCity}/>
//         <ActiveCity city={this.state.selectedCity} />
//       </div>
//     );
//   }
// }

export default App;
