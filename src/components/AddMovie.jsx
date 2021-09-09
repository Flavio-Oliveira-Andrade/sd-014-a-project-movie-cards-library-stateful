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
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ title: event.target.value })
  }
  
  render() {
    const { title } = this.state
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label">Título</label>
          <input type="text" value={ title } data-testid="title-input" onChange={ this.handleChange } />
        </form>
      </div>
    )
  }
}

export default AddMovie;
