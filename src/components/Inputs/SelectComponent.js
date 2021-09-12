import React from 'react';
import PropTypes from 'prop-types';

class SelectComp extends React.Component {
  render() {
    const { id, titulo, value, callback } = this.props;
    const options = [
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
        data-testid={ `${id}-input-label` }
        htmlFor={ id }
      >
        { titulo }
        <select
          id={ id }
          data-testid={ `${id}-input` }
          onChange={ callback }
          value={ value }
        >
          {options.map((g) => (
            <option
              key={ g.pt }
              data-testid="genre-option"
              value={ g.en }
            >
              { g.pt }
            </option>)) }
        </select>
      </label>
    );
  }
}

SelectComp.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.string.isRequired,
};

export default SelectComp;
