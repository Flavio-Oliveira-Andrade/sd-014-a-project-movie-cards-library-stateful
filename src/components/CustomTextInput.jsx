import React from 'react';
import PropTypes from 'prop-types';
// dentro do metodo render existe um limite de linhas que podem ser chamadas
// pedi ajuda no grupo, a Jéssica grunewald e a Yasmin me explicaram como contornar essa situação
// criar um componente que gera inputs
// e Parte da solução é do repositório do Fernando Oliveira que solicitou code review
// https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/19/files
// componente final do projeto dele foi a base o TextInput.jsx
class CustomTextInput extends React.Component {
  render() {
    const { value, onChange, dataID, name, title } = this.props;
    return (
      <label htmlFor={ `${dataID}` } data-testid={ `${dataID}-label` }>
        { `${title}` }
        <input
          data-testid={ `${dataID}` }
          id={ `${dataID}` }
          name={ `${name}` }
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

CustomTextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataID: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default CustomTextInput;
