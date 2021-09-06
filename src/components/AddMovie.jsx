import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { onclick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <TextInput
          name="title"
          title="Título:"
          handler={this.handleChange}
          value={title}
          testIds={{ labelId: 'title-input-label', inputId: 'title-input' }}
        />
        <TextInput
          name="subtitle"
          title="Subtítulo:"
          handler={this.handleChange}
          value={subtitle}
          testIds={{ labelId: 'subtitle-input-label', inputId: 'subtitle-input' }}
        />
        <TextInput
          name="imagePath"
          title="Imagem:"
          handler={this.handleChange}
          value={imagePath}
          testIds={{ labelId: 'image-input-label', inputId: 'image-input' }}
        />
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse:
          <textarea
            name="storyline"
            id="storyline"
            cols="30"
            ows="10"
            value={ storyline }
            onChange={ this.handleChange }
            data-testid="storyline-input"
          />
        </label>
      </form>

    );
  }
}

AddMovie.propTypes = { onclick: PropTypes.func };

AddMovie.defaultProps = { onclick: () => undefined };

export default AddMovie;
