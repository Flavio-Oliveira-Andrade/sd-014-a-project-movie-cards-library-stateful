import React from 'react';
import PropTypes from 'prop-types';

class Bar extends React.Component {
  render() {
    const { onSearchTextChange, searchText } = this.props;
    return (
      <label htmlFor="text-input" data-testid="text-input-label">
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="text-input"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </label>
    );
  }
}

Bar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
export default Bar;
