import React, { Component } from "react";
import Movies from "./moviesTable";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { Paginate } from "../utils/paginate";
import { Sort } from "../utils/sort";
import _ from "lodash";
import GenreMenu from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import NavBar from "./navbar";

class MoviesPage extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
    selectedGenre: { _id: "5b21ca3eeb7f6fbccd471816", name: "All" },
    pageSize: 4,
    genreList: getGenres(),
    sortColumn: { path: "title", order: "asc" }
  };
  handleDelete = id => {
    let movies = this.state.movies.filter(m => m._id !== id);
    this.setState({ movies });
  };
  handleLike = movie => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleListMenuChange = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies,
      selectedGenre,
      genreList,
      sortColumn
    } = this.state;
    const filtered = Sort(selectedGenre, movies);
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const PaginateMovies = Paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-sm-3 mt-4">
          <GenreMenu
            onClick={this.handleListMenuChange}
            genreList={genreList}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="col-sm-9">
          <p className="mt-4 font-weight-bold">
            Showing {filtered.length} movies from the database
          </p>
          <Movies
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            movieData={PaginateMovies}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            totalItems={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default MoviesPage;
