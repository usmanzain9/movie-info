import React, { Component } from "react";

const GenreMenu = props => {
  const {
    genreList,
    textProperty,
    valueProperty,
    onClick,
    selectedGenre
  } = props;
  return (
    <ul className="list-group">
      {genreList.map(genre => (
        <li
          style={{ cursor: "pointer" }}
          onClick={() => onClick(genre)}
          key={genre[valueProperty]}
          className={
            selectedGenre === genre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};
GenreMenu.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default GenreMenu;
