import React from 'react';
import PropTypes from 'prop-types';

class SearchTextInput extends React.Component {
  render() {
    const { value, testIds, handler } = this.props;
    return (
      <label htmlFor="searchText" data-testid={ testIds.labelId }>
        Inclui o texto:
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={ value }
          data-testid={ testIds.inputId }
          onChange={ handler }
        />
      </label>
    );
  }
}

SearchTextInput.propTypes = {
  handler: PropTypes.func,
  value: PropTypes.string,
  testIds: PropTypes.shape({
    labelId: PropTypes.string,
    inputId: PropTypes.string,
  }),
};

SearchTextInput.defaultProps = {
  handler: () => undefined,
  value: '',
  testIds: {
    labelId: '',
    inputId: '',
  },
};

export default SearchTextInput;
