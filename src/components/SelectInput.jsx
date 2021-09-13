import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  render() {
    const { change, genre } = this.props;
    const options = [{
      value: 'action',
      nome: 'Ação',
      key: 'actionKey',
    },
    {
      value: 'comedy',
      nome: 'Comédia',
      key: 'comedyKey',
    },
    {
      value: 'thriller',
      nome: 'Suspense',
      key: 'thrillerKey',
    }];
    return (
      <label
        htmlFor="genero"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          id="genero"
          onChange={ change }
          value={ genre }
          data-testid="genre-input"
        >
          {options.map((opcao) => (
            <option
              key={ opcao.key }
              value={ opcao.value }
              data-testid="genre-option"
            >
              {opcao.nome}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
SelectInput.propTypes = {
  change: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};
export default SelectInput;
