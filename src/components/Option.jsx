import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Option extends Component {
  render() {
    const { name, value } = this.props;
    return (
      <option data-testid="select-option" id="select" value={ value }>{ name }</option>
    );
  }
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
