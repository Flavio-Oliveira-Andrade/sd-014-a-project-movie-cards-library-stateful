import React from 'react';

class Genre extends React.Component {
  render(){
    const { handleChange, value } = this.props;
    return(
      <label data-testid="genre-input-label" htmlFor="gen">Gênero
        <select 
        data-testid="genre-input"
        name="genre"
        id="gen"
        onChange={ handleChange }
        value={ value }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    )
  }
}

export default Genre;