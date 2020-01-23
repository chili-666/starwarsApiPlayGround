import React from "react";
import Homeworld from "./Homeworld";
import Films from "./Films";
import { Ripple } from "react-load-animations";
import "./styles.css";

class Character extends React.Component {
  constructor() {
    super();
    this.state = {
      homeworld: {},
      loading: true,
      films: {}
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch(this.props.homeworld)
      .then(response => response.json())
      .then(data => {
        this.setState({
          homeworld: data,
          //name: this.props.name,
          loading: false
        });
      });
  }

  render() {
    const world = this.state.loading ? (
      <Ripple width={32} height={32} />
    ) : (
      this.state.homeworld.name
    );
    const films = this.state.loading ? (
      <Ripple width={32} height={32} />
    ) : (
      this.props.films.map(film => <Films filme={film} />)
    );
    return (
      <div className="character">
        <h1>{this.props.name}</h1>
        <p>
          Birth: {this.props.birth}
          <br />
          Homeworld: {world}
          <br />
        </p>
        <div className="movie-container">
          <h4>Films:</h4>
          <ul>{films}</ul>
        </div>
      </div>
    );
  }
}
export default Character;
