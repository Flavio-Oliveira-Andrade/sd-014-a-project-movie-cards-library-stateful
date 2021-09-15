import React from 'react';
import PropTypes from 'prop-types';

class ImputTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <section>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            data-testid="title-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </section>
    );
  }
}

ImputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImputTitle;
