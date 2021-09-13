import React, { Component } from 'react';
import PersonalData from './PersonalData';

class AddMovie extends Component {
  constructor() {
    super();
    this.changeState = this.changeState.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      /* rating: 0,
            genre: 'action', */
    };
  }

  changeState({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onclick } = this.props;
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <PersonalData
          titleValue={ title }
          subtitleValue={ subtitle }
          imagePathValue={ imagePath }
          handleChange={ this.changeState }
        />
        <label htmlFor="storyline-input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            value={ storyline }
            cols="30"
            rows="10"
            data-testid="storyline-input"
            onChange={ this.changeState }
          />
        </label>
      </form>

    );
  }
}

export default AddMovie;
