import React from 'react';
import CustomInput from './CustomInput';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      title: '',
      // story: '',
      // imagePath: '',
      // rating: 0,
      // genre: '',
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    // const { onClick } = this.props;
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <CustomInput
          name="title"
          type="text"
          labelText="Título"
          value={ title }
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default AddMovie;
