import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { listCities } from '../actions';

import City from '../containers/city';

class CityList extends Component {

  componentWillMount() {
   this.props.listCities();
  }

  render() {
    return(
      <div className="cities">
        {this.props.cities.map((city) => {
          return <City key={city.name} city={city} />;
        })}
      </div>
    )
  };

  // ORIGINAL REACT APPROACH
  // render() {
  //   return(
  //     <div className="cities">
  //       {this.props.cities.map((city) => {
  //         return <City key={city.name} city={city} pickCity={this.props.pickCity} selectedCity={this.props.selectedCity}/>;
  //       })}
  //     </div>
  //   )
  // };
};

function mapReduxStateToProps(state) {
  return {
    cities: state.cities
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { listCities: listCities},
    dispatch
  );
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(CityList);

// export default CityList;
