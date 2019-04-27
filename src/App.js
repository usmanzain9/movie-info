import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import _ from "lodash";
import MoviesPage from "./components/movies";
import NavBar from "./components/navbar";
import RentalsPage from "./components/rentals";
import CustomerPage from "./components/customers";
import MovieForm from "./components/movieForm";
import NotFound from "./components/notFound";
import LoginPage from "./components/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/customers" component={CustomerPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
