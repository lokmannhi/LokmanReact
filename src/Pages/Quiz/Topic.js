import React from "react";
import { Link } from "react-router-dom";

import "./Topic.css";

const Topic = () => {
  return (
    <div className="Container">
      <main>
        <div className="Glass">
          <div className="Title">
            <h1>Quiz App</h1>
          </div>
          <div className="Quiz">
            <Link to="/quiz/mandarin">
              <button className="btn">Mandarin</button>
            </Link>
            <Link to="/quiz/Arabic">
              <button className="btn">Arabic</button>
            </Link>
            <button className="btn">PlaceHolder</button>
            <button className="btn">PlaceHolder</button>
            <button className="btn">PlaceHolder</button>
            <button className="btn">PlaceHolder</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Topic;
