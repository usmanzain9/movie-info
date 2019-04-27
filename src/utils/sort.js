export function Sort(selectedGenre, movies) {
  if (selectedGenre.name === "All") {
    return movies;
  } else {
    let sorted = movies.filter(
      movie => movie.genre.name === selectedGenre.name
    );
    return sorted;
  }
}
