import React from "react";

let movieDetail = movies.map((detail, i) => (
  <li onClick={this.handleClick} onMouseEnter={this.handleHover} id={i}>
    <span>{detail}</span>
    {this.state.show ? (
      <span className="crawl">
        <br />
        <br />
        {crawlText[i]}
        <br />
        <br />
      </span>
    ) : null}
  </li>
));
