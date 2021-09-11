import React from 'react';
import PropTypes from 'prop-types';

class Sinop extends React.Component {
  render() {
    const { value, handleStates } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="cont">
        Sinopse
        <textarea
          name="storyline"
          type="text"
          onChange={ handleStates }
          value={ value }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default Sinop;

Sinop.propTypes = {
  value: PropTypes.string,
  handleStates: PropTypes.func,
};

Sinop.defaultProps = {
  value: '',
  handleStates: () => {},
};
