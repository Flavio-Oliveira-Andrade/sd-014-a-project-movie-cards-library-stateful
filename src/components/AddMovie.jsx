import React from 'react';
import PropTypes from 'prop-types';
import PutInput from './PutInput';
import SelectInput from './SelectInput';
import inputs from './inputs';

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
    const values = [title, subtitle, imagePath, storyline, rating];
    return (
      <form data-testid="add-movie-form">
        <fieldset>
          {inputs.map((input, i) => (<PutInput
            key={ input.name }
            data={ input.data }
            name={ input.name }
            type={ input.type }
            label={ input.label }
            value={ values[i] }
            onChange={ change }
          />))}
          <SelectInput data-testid="genre-input" change={ change } genre={ genre } />
          <button
            type="submit"
            data-testid="send-button"
            onClick={ onClick }
          >
            Adicionar filme
          </button>
        </fieldset>
      </form>);
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default AddMovie;
