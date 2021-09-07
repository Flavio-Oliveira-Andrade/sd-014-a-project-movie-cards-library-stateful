// implement AddMovie component here
import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.aE = this.aE.bind(this);
  }

  aE(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    //  const { onClick } = this.props;
    const { title: t, subtitle: s, imagePath: i } = this.state;
    const ti = 'title-input';
    const si = 'subtitle-input';
    const ip = 'image-input';

    return (
      <form data-testid="add-movie-form">
        <label htmlFor="t" data-testid="title-input-label">
          Título
          <input type="text" id="t" data-testid={ ti } value={ t } onChange={ this.aE } name="title" />
        </label>
        <label htmlFor="s" data-testid="subtitle-input-label">
          Subtítulo
          <input type="text" id="s" data-testid={ si } value={ s } onChange={ this.aE } name="subtitle" />
        </label>
        <label htmlFor="i" data-testid="image-input-label">
          Imagem
          <input type="text" id="i" data-testid={ ip } value={ i } onChange={ this.aE } name="imagePath" />
        </label>
      </form>
    );
  }
}

/*  AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};  */

export default AddMovie;
