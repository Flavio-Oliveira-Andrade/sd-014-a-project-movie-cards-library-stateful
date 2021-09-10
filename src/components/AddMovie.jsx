import React from 'react';
import PutInput from './PutInput';

class AddMovie extends React.Component {
  render() {
    const {
      onClick,
      title,
      subtitle,
      rating,
      imagePath,
      storyline,
      genre,
      change } = this.props;
    return (<form data-testid="add-movie-form">
      <fieldset>
        {/* <PutInput for={} id='' type='' name='' value='' onChange={ change }/> */}
        <label
          htmlFor="titulo"
          data-testid="title-input-label"
        >
          Título
        </label>
        <input
          id="titulo"
          name="title"
          type="text"
          data-testid="title-input"
          value={ title }
          onChange={ change }
        />
        <label
          htmlFor="subTitulo"
          data-testid="subtitle-input-label"
        >
          Subtítulo
        </label>
        <input
          id="subTitulo"
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          value={ subtitle }
          onChange={ change }
        />
        <label
          htmlFor="image"
          data-testid="image-input-label"
        >
          Imagem
        </label>
        <input
          id="image"
          name="imagePath"
          type="text"
          value={ imagePath }
          data-testid="image-input"
          onChange={ change }
        />
        <label
          htmlFor="storyline"
          data-testid="storyline-input-label"
        >
          Sinopse
        </label>
        <textarea
          name="storyline"
          id="storyline"
          cols="30"
          rows="10"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ change }
        />
        <label
          htmlFor="avaliation"
          data-testid="rating-input-label"
        >
          Avaliação
        </label>
        <input
          id="avaliation"
          type="number"
          value={ rating }
          data-testid="rating-input"
          name="rating"
          onChange={ change }
        />
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
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
        <button data-testid="send-button" onClick={ onClick }>Adicionar filme</button>
      </fieldset>
      {/* {console.log(rating)} */}
      {/* {this.props.newMovie.titulo='aaa'} */}
      {/* {console.log(newMovie)} */}
      {/* {console.log(newMovie)} */}
    </form>);
  }
}

export default AddMovie;
