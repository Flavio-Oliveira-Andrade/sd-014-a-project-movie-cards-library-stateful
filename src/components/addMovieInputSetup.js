const setupFormInputs = {
  titleInput: {
    type: 'text',
    id: 'title',
    name: 'title',
    content: 'Título',
  },
  subtitleInput: {
    type: 'text',
    id: 'subtitle',
    name: 'subtitle',
    content: 'Subtítulo',
  },
  imageInput: {
    type: 'text',
    id: 'image',
    name: 'imagePath',
    content: 'Imagem',
  },
  ratingInput: {
    type: 'number',
    id: 'rating',
    name: 'rating',
    content: 'Avaliação',
  },
  textareaInput: {
    type: 'text',
    id: 'storyline',
    name: 'storyline',
    content: 'Sinopse',
  },
  selectInput: {
    id: 'genre',
    name: 'genre',
    content: 'Gênero',
    optionTag: {
      optionTagValue: ['action', 'comedy', 'thriller'],
      optionTagContent: ['Ação', 'Comédia', 'Suspense'],
    },
  },
};

export default setupFormInputs;
