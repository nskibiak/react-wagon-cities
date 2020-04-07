import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions'

// const City = (props) => {
//   return (
//     <li
//       className="list-group-item"
//       onClick={() => props.selectCity(props.city)}
//     >{props.city.name}</li>
//   );
// };

class City extends Component {

  // handleClick = (props) => {
  //   selectCity(props.city);
  // }

  render() {

    const city = this.props.city;
    const selectedCity = this.props.selectedCity;
    let classes = 'list-group-item'
    if (city === selectedCity) {
      classes += ' selected'
    }

    return (
      <div
        className={classes}
        onClick={() => this.props.selectCity(city)}
      >
        {city.name}
      </div>
    );
  }

};

function mapReduxStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity: selectCity },
    dispatch
  );
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(City);

