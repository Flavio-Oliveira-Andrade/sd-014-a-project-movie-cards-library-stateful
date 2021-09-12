// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.props = {
      onClick: console.log(String("1234")),
    }
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
  }
  render() {
    

    return (
      <div>
        
      </div>
    );
  }
}

export default AddMovie;