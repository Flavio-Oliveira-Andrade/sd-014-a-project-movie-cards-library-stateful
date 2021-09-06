// implement MovieLibrary component here
import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import movies from "/home/lucas/Documentos/trybe-projetos/Front-end/Movie-cards-stateful/sd-014-a-project-movie-cards-library-stateful/src/data";

class MovieLibrary extends React.Component {
    render() {
        return (
            <div>
                <SearchBar />
                <MovieList movies={ movies }/>
                <AddMovie />
            </div>
        )
    }
}

export default MovieLibrary;