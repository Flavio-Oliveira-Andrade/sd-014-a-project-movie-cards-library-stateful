//  implement AddMovie component here
import React from 'react';
// 6 - Crie um componente chamado <AddMovie />
class AddMovie extends React.Component {
//   constuctor() {
//     super();
//   }

  render() {
    const { subtitle, storyline, rating, imagePath, bookmarked,
      genre, title } = this.props;
    const { onClick } = this.props;
    //   7 - Renderize um formulário dentro de <AddMovie />
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label">
          Título
          <input data-testid="title-input" value={ title }> </input>
        </label>
      </form>
    );
  }
}

export default AddMovie;
