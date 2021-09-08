import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  updateState = ({ target }) => {
    this.setState({
      title: target.value,
    });
  }

  creatInput = (title, type, dataTest, value) => (
    <input
      name={ title }
      data-testid={ dataTest }
      type={ type }
      value={ value }
      onChange={ this.updateState }
    />
  )

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title">
          Título
          {this.creatInput('title', 'text', 'title-input', title)}
        </label>
      </form>
    );
  }
}

export default AddMovie;
