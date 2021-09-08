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
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(event) {
    const { name, value } = event.target;
    this.setState(() => {
      if (name === 'title') return ({ title: value });
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.props;
    return (
      <form action="form" data-testid="add-movie-form">
        <label htmlFor="titulo" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="titulo"
            id="titulo"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleForm }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
