import React, { Component } from 'react';
import Input from '../sub-components/Input';
import Image from '../sub-components/Image';
import TextArea from '../sub-components/TextArea';
import InputNumber from '../sub-components/InputNumber';
import Select from '../sub-components/Select';
import Button from '../sub-components/Button';

const INITIAL_STATE = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    const { onClick } = this.props;
    event.preventDefault();
    onClick(this.state);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, handleClick } = this;
    return (
      <div>
        <form data-testid="add-movie-form">
          <Input
            title={ title }
            handleChange={ handleChange }
            customize="title"
            text="Título"
          />
          <Input
            title={ subtitle }
            handleChange={ handleChange }
            customize="subtitle"
            text="Subtítulo"
          />
          <Image
            title={ imagePath }
            handleChange={ handleChange }
            customize="image"
            text="Imagem"
            name="imagePath"
          />
          <TextArea
            storyline={ storyline }
            handleChange={ handleChange }
            customize="storyline"
          />
          <InputNumber rating={ rating } handleChange={ handleChange } />
          <Select genre={ genre } handleChange={ handleChange } />
          <Button handleClick={ handleClick } />
        </form>
      </div>
    );
  }
}

export default AddMovie;
