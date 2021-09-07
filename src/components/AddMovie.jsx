import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: '',
    };

    this.myFunctionCall = this.myFunctionCall.bind(this);
  }

  myFunctionCall() {

  }

  render() {
    return (
      <form action="">

        <button type="button" onClick={ this.myFunctionCall }>enviar</button>

      </form>
    );
  }
}

export default AddMovie;
