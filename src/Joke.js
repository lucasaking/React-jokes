import React, { Component, useEffect, useState } from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

function Joke({id, votes, vote, text}) {

  function upVote(evt) {
    vote(id, + 1);
  }
  function downVote(evt) {
    vote(id, - 1);
  }

  console.log("JOKE TEXXXTTT", text)

  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={upVote}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={downVote}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}



export default Joke;
