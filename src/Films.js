import React, { Component } from "react";
import Character from "./Character";
import "./styles.css";
import { Ripple } from "react-load-animations";

class Films extends React.Component {
  constructor() {
    super();
    this.state = {
      title: [],
      crawl: [],
      loading: true,
      show: false,
      id: {},
      hover: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch(this.props.filme)
      .then(response => response.json())
      .then(data => {
        this.setState(state => {
          const title = state.title.concat(data.title);
          const crawl = state.crawl.concat(data.opening_crawl);
          //name: this.props.name,
          return {
            title,
            crawl,
            loading: false
          };
        });
      });
  }

  handleClick() {
    this.setState(prevState => {
      return {
        show: !prevState.show
      };
    });
  }

  handleHover() {
    this.setState(prevState => {
      return {
        hover: !prevState.hover
      };
    });
  }

  render() {
    let hoverStyle = this.state.hover ? { color: "red" } : null;
    let crawl = this.state.show ? (
      <p className="crawl">{this.state.crawl}</p>
    ) : null;
    return (
      <li
        className="movie"
        style={hoverStyle}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        <p onClick={this.handleClick}>{this.state.title}</p>
        {crawl}
      </li>
    );
  }
}
export default Films;
