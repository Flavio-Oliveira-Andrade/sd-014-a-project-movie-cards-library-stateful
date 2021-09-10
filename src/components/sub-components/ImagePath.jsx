import React from 'react';

class ImagePath extends React.Component {
  render(){
    const { handleChange , value } = this.props;
    return(
      <label data-testid="image-input-label" htmlFor="imagePath">
      Imagem
      <input
        name="imagePath"
        type="text"
        data-testid="image-input"
        onChange={ handleChange }
        value={ value }
      />
    </label>
    )
  }
}

export default ImagePath;