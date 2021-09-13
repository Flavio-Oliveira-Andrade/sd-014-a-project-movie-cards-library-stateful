import React from 'react';

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

  handelchange(event) {
    const { name } = event.target;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onclick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="title-input">
          Titulo
          <input
            data-testid="title-input"
            type="text"
            name={ title }
            value={ title }
            onChange={ this.handelchange }
          />
        </label>
        onclick=
        { onclick }
      </form>
    );
  }
}

export default AddMovie;
