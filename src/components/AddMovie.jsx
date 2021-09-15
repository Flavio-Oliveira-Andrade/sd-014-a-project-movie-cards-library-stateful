import React from 'react';
import PropTypes from 'prop-types';
import InputTitle from './inputTitle';
import InputSubtitle from './inputSubtitle';
import InputImage from './inputImage';
import InputStoryline from './inputStoryline';
import InputRating from './InputRating';
import InputGenre from './InputGenre';

class AddMovie extends React.Component {
  // https://pt-br.reactjs.org/docs/react-component.html#constructor
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
    // referencia do bind: https://stackoverflow.com/questions/32317154/react-uncaught-typeerror-cannot-read-property-setstate-of-undefined?rq=1
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  // handleClickBtn() {
  //   this.props.onClick;
  // }

  // Referencia para melhoria de codigo,divisão de componentes em arquivos separados:
  // Elielson - https://github.com/tryber/sd-014-a-project-movie-cards-library-stateful/pull/120/files

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;

    return (
      <section>
        <form data-testid="add-movie-form">
          <InputTitle value={ title } onChange={ this.handleChange } />
          <InputSubtitle value={ subtitle } onChange={ this.handleChange } />
          <InputImage value={ imagePath } onChange={ this.handleChange } />
          <InputStoryline value={ storyline } onChange={ this.handleChange } />
          <InputRating value={ rating } onChange={ this.handleChange } />
          <InputGenre value={ genre } onChange={ this.handleChange } />

          <button
            data-testid="send-button"
            onClick={ onclick }
          >
            Adicionar filme
          </button>
        </form>
      </section>
    );
  }
}

export default AddMovie;
