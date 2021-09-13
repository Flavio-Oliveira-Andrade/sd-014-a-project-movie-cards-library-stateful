import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle:'',
      title:'',
      imagePath:'',
      storyline:'',
      rating:0,
      genre:'action',
    };
  }

  render() {
    const { onclick } = this.props;
    return (
      <div>
        onclick=
        { onclick }
      </div>
    );
  }
}

export default AddMovie;
