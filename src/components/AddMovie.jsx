// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';
import Inputs from './Inputs';

const inicialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: '',
  genre: '',
};

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = inicialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Inputs
          name="title"
          type="text"
          handleChange={ this.handleChange }
          value={ title }
          labelText="Título"
          id="title-input"
        />
        <Inputs
          name="subtitle"
          type="text"
          handleChange={ this.handleChange }
          value={ subtitle }
          labelText="Subtítulo"
          id="subtitle-input"
        />
        {/* <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
          <input
            type="text"
            name="title"
            value={ title }
            data-testid="title-input"
            onChange={ this.handleChange }
          />
        </label> */}
      </form>
    );
  }
}

// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddMovie;
