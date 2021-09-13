import React from 'react';

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
    return (<>
      <label
        htmlFor="genero"
        data-testid="genre-input-label"
      >
        Gênero
      </label>
      <select
        name="genre"
        id="genero"
        onChange={ change }
        value={ genre }
        data-testid="genre-input"
      >
        {options.map((opcao) => (<option
          key={ opcao.key }
          value={ opcao.value }
          data-testid="genre-option"
        >
          {opcao.nome}
        </option>))}
      </select>
            </>);
  }
}

export default SelectInput;
