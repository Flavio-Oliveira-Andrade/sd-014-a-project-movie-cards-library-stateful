import React from 'react';
import PropTypes from 'prop-types';
import AddMovieFormInput from './AddMovieFormInput';
import AddMovieFormTextarea from './AddMovieFormTextarea';

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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { eventListener } = this.props;
    const {
      subtitle,
      title,
      imagePath,
      storyline,
      rating,
      genre,
    } = this.state;
    return (
      <div>
        <AddMovieFormInput
          name="title"
          value={ title }
          string="Título"
          eventListener={ this.handleChange }
        />
        <AddMovieFormInput
          name="subtitle"
          value={ subtitle }
          string="Subtítulo"
          eventListener={ this.handleChange }
        />
        <AddMovieFormInput
          name="imagePath"
          value={ imagePath }
          string="Imagem"
          eventListener={ this.handleChange }
        />
        <AddMovieFormTextarea
          name="storyline"
          value={ storyline }
          string="Sinopse"
          eventListener={ this.handleChange }
        />
        <p>{ rating }</p>
        <p>{ genre }</p>
        <p>{ eventListener }</p>
        <form data-testid="add-movie-form" />
      </div>
    );
  }
}

AddMovie.defaultProps = {
  eventListener: '',
};

AddMovie.propTypes = {
  eventListener: PropTypes.func,
};

export default AddMovie;
