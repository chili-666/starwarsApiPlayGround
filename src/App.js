import React, { Component } from "react";
import Character from "./Character";
import "./styles.css";
import { Ripple } from "react-load-animations";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      character: [],
      next: ""
    };
  }

  componentDidMount() {
    /* var fetchNow = function(url) {
      if (url != null) {
        return fetch(url)
          .then(response => response.json())
          .then(data => {
            this.setState({
              character: data.results,
              next: data.next,
              loading: false})
            console.log("NExt", data.next);
            fetchNow(data.next);
          });
      }
    };*/
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .then(data => {
        console.log(data.next);
        this.setState({
          character: data.results,
          next: data.next,
          loading: true
        });
        //fetchNow("https://swapi.co/api/people/");
      });
  }

  componentDidUpdate() {
    this.state.next
      ? fetch(this.state.next)
          .then(response => response.json())
          .then(data => {
            console.log(data.next);
            this.setState(prevState => ({
              character: this.state.character.concat(data.results),
              next: data.next,
              loading: false
            }));
            //fetchNow("https://swapi.co/api/people/");
          })
      : console.log("Next is leer");
  }

  render() {
    this.state.loading
      ? console.log("Lädt")
      : console.log("State", this.state.next);
    const text = this.state.loading ? (
      <Ripple width={32} height={32} />
    ) : (
      this.state.character.map(item => (
        <Character
          name={item.name}
          birth={item.birth_year}
          films={item.films}
          homeworld={item.homeworld}
        />
      ))
    );

    //console.log("Character:", this.state.character);

    return (
      <div>
        <header className="header">
          <i className="fas fa-jedi icon" />
          <h1>My StarWarsApi-Playground</h1>
        </header>
        <content className="container">{text}</content>
      </div>
    );
  }
}
export default App;
