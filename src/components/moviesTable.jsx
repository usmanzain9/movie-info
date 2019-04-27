import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {};
  render() {
    const { movieData, onLike, onDelete, sortColumn, onSort } = this.props;
    const tableView = movieData.length === 0 ? "table d-none" : "table";
    const columns = [
      {
        label: "Title",
        path: "title",
        content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      },
      { label: "Genre", path: "genre.name" },
      { label: "Stock", path: "numberInStock" },
      { label: "Rate", path: "dailyRentalRate" },
      {
        content: movie => (
          <Like liked={movie.liked} onClick={() => onLike(movie)} />
        ),
        key: "like"
      },
      {
        content: movie => (
          <button
            onClick={() => onDelete(movie._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
        key: "button"
      }
    ];
    return (
      <table className={tableView}>
        <TableHeader
          onSort={onSort}
          columns={columns}
          sortColumn={sortColumn}
        />
        <TableBody data={movieData} columns={columns} />
      </table>
    );
  }
}

export default Movies;
