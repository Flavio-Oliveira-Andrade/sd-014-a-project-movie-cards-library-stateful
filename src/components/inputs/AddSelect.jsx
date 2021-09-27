import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddSelect extends Component {
  render() {
    const { id, label, value, callback } = this.props;
    const genres = [
      {
        en: 'action',
        pt: 'Ação',
      },
      {
        en: 'comedy',
        pt: 'Comédia',
      },
      {
        en: 'thriller',
        pt: 'Suspense',
      },
    ];

    return (
      <label
        htmlFor={ id }
        data-testid={ `${id}-input-label` }
      >
        { label }
        <select
          name={ id }
          id={ id }
          value={ value }
          data-testid={ `${id}-input` }
          onChange={ callback }
        >
          { genres.map((genre) => (
            <option
              key={ genre.pt }
              value={ genre.en }
              data-testid={ `${id}-option` }
            >
              { genre.pt }
            </option>))}
        </select>
      </label>
    );
  }
}

AddSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
