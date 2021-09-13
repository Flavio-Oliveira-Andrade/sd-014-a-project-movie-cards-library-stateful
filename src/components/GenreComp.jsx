import React from 'react';
import PropTypes from 'prop-types';
import generos from './generos';

class GenreComp extends React.Component {
  render() {
    const { valor, change } = this.props;
    return (
      <label htmlFor="genero" data-testid="select-input-label">
        Filtrar por gênero
        <select
          name="genero"
          id="genero"
          value={ valor }
          onChange={ change }
          data-testid="select-input"
        >
          {generos.map((opcao) => (
            <option
              value={ opcao.opcao }
              data-testid="select-option"
              key={ opcao.genero }
            >
              {opcao.genero}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
GenreComp.propTypes = {
  valor: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};
export default GenreComp;
