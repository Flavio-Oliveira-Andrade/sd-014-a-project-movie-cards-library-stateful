// Importação dos Componentes.
import React from 'react';
import PropTypes from 'prop-types';

// Criando o componente FormAddMovieImagePath e renderizando.

// const { value, onChange } = this.props;: recebendo o valor do filho via this.props

// <input value={ value } onChange={ onChange }: />: alterando o valor do filho para o Pai.

class FormAddMovieImagePath extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

// Verificando os tipos das propriedades que eu espero que esse componente esteja recebendo, para validação.
// Referência: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html

// isRequired: É obrigatorio que ele venha com alguma propriedade no FormAddMovieImagePath.
FormAddMovieImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// exportando o componente FormAddMovieImagePath.
export default FormAddMovieImagePath;
