import React, { Component } from "react";

const MovieForm = props => {
  return (
    <div>
      <h1>Movies Form {props.match.params.id}</h1>
    </div>
  );
};

export default MovieForm;
