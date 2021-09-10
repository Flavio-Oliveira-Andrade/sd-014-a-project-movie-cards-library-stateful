// implement AddMovie component here
import React from 'react';
import Title from './sub-components/Title'
import Subtitle from './sub-components/Subtitle';
import ImagePath from './sub-components/ImagePath';
import StoryLine from './sub-components/StoryLine';
import Rating from './sub-components/Rating';
import Genre from './sub-components/Genre';
import Button from './sub-components/Button';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target  }) {
    const { name } = target;
    const oshiro = target.type === "checkbox" ? target.checked : target.value;
   

    this.setState({
      [name]: oshiro });
  }

    handleSubmit(event) {
    event.preventDefault();
    onClick(this.state);
      this.setState({
        subtitle: '',
        title: '',
        imagePath: '',
        storyLine: '',
        rating: 0,
        genre: 'action',
      })
      const { onClick } = this.props;
    }  
  


  render() {
    return (
      <form data-testid="add-movie-form">

       <Title handleChange={this.handleChange} value={this.state.title}/>

       <Subtitle handleChange={this.handleChange} value={this.state.subtitle} />
    
       <ImagePath handleChange={this.handleChange} value={this.state.imagePath} />
       
       <StoryLine handleChange={this.handleChange} value={this.state.storyLine} />

       <Rating handleChange={this.handleChange} value={this.state.rating} />

       <Genre handleChange={this.handleChange} value={this.state.genre} />

       <Button  onClick={this.onClick}/>
      </form>
    );
  }
}

export default AddMovie;
