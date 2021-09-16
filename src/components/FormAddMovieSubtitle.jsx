// Importação dos Componentes.
import React from 'react';
import PropTypes from 'prop-types';

// Criando o componente FormAddMovieSubtitle e renderizando

// const { value, onChange } = this.props;: recebendo o valor do filho via this.props

// <input value={ value } onChange={ onChange }: />: alterando o valor do filho para o Pai.
class FormAddMovieSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
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

// isRequired: É obrigatorio que ele venha com alguma propriedade no FormAddMovieSubtitle.
FormAddMovieSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// exportando o componente FormAddMovieSubtitle.
export default FormAddMovieSubtitle;
