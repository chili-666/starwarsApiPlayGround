import React from "react";

function Crawler(props) {
  return <p className="crawl">{props.show ? props.text : null}</p>;
}

export default Crawler;
