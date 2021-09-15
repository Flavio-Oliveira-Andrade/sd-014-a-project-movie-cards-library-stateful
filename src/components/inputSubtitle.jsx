import React from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <section>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            data-testid="subtitle-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </section>);
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
