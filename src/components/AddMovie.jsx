// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          <label data-testid="title-input-label" htmlFor>
            <input
              type="text"
              value="title"
              data-testid="title-input"
            />
            Título
          </label>
        </form>
      </div>

    );
  }
}

export default AddMovie;
