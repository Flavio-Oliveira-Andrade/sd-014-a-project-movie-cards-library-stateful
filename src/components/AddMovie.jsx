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
      genre: '',
    };
}
  render() {
    const { onCLick } = this.props;
    return(
      <div>
      </div>
    )
  }
}

export default AddMovie;
