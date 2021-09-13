import React from 'react';
import InputTitle from './formAddMovie/InputTitle';
import InputSubtitle from './formAddMovie/InputSubtitle';
import InputImagePath from './formAddMovie/InputImagePath';
import TextareaStoryline from './formAddMovie/TextareaStoryline';
// import InputRating from './formAddMovie/InputRating';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputSubtitle: '',
      inputTitle: '',
      inputImagePath: '',
      textareaStoryline: '',
      // inputRating: 0,
      // inputGenre: 'action',
    };
  }

  handleChange({ target }) { // desestruturação do event para não precisar escrever event.target
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value; // necessário para conseguir pegar o valor do checkbox, se for checkbox pega o checked e se não for pega o value
    this.setState({ [name]: value }); // interpolando o valor da variável para ser o nome da chave do objeto
  }

  // handleChangeInputRating({ target }) {
  //   const { name } = target;
  //   let value = target.value;
  //   if( value !== null || value !== '') value = parseInt(target.value);
  //   this.setState({ [name]: value });
  // }

  render() {
    const { inputSubtitle, inputTitle, inputImagePath, textareaStoryline } = this.state;
    return (
      <form data-testid="add-movie-form">
        <InputTitle
          inputTitle={ inputTitle }
          handleChange={ this.handleChange }
        />
        <InputSubtitle
          inputSubtitle={ inputSubtitle }
          handleChange={ this.handleChange }
        />
        <InputImagePath
          inputImagePath={ inputImagePath }
          handleChange={ this.handleChange }
        />
        <TextareaStoryline
          textareaStoryline={ textareaStoryline }
          handleChange={ this.handleChange }
        />
        {/* <InputRating
          inputRating={ inputRating }
          handleChange={ this.handleChangeInputRating }
        /> */}
      </form>
    );
  }
}

export default AddMovie;
