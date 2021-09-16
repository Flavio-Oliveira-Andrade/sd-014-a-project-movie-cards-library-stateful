import React from 'react';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      // subtitle: '',
      // title: '',
      // imagePath: '',
      // storyline: '',
      // rating: 0,
      // genre: 'action',
    };
  }

  render() {
    // const { onClick } = this.props;
    // const {
    //   subtitle,
    //   title,
    //   imagePath,
    //   storyline,
    //   rating,
    //   genre
    // } = this.state;

    return (
      <div>
        <form
          data-testid="add-movie-form"
          action=""
        />
      </div>

    );
  }
}

export default AddMovie;
