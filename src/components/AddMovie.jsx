import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import StoryLineInput from './StoryLineInput';
import RatingInput from './RatingInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: '0',
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { onclick } = this.props;
    const { title, subtitle, imagePath, storyline, rating } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          name="title"
          title="Título:"
          handler={ this.handleChange }
          value={ title }
          testIds={ { labelId: 'title-input-label', inputId: 'title-input' } }
        />
        <TextInput
          name="subtitle"
          title="Subtítulo:"
          handler={ this.handleChange }
          value={ subtitle }
          testIds={ { labelId: 'subtitle-input-label', inputId: 'subtitle-input' } }
        />
        <TextInput
          name="imagePath"
          title="Imagem:"
          handler={ this.handleChange }
          value={ imagePath }
          testIds={ { labelId: 'image-input-label', inputId: 'image-input' } }
        />
        <StoryLineInput value={ storyline } handler={ this.handleChange } />

        <RatingInput value={ rating } handler={ this.handleChange } />
      </form>

    );
  }
}

AddMovie.propTypes = { onclick: PropTypes.func };

AddMovie.defaultProps = { onclick: () => undefined };

export default AddMovie;
