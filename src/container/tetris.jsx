
import React from "react";
import './tetris.scss';


const Tetris = require('react-tetris');

const Game= () => (
  <div className="container">
    <h1>Tetris</h1>
    <Tetris>
      {({
        HeldPiece,
        Gameboard,
        PieceQueue,
        points,
        linesCleared,
        state,
        reset
      }) => (
        <div>
          <HeldPiece />
          <div>
            <p>Points: {points}</p>
            <p>Lines Cleared: {linesCleared}</p>
          </div>
          <Gameboard />
          <PieceQueue />
          {state === 'LOST' && (
            <div>
              <h2>Game Over</h2>
              <button onClick={reset}>New game</button>
            </div>
          )}
        </div>
      )}
    </Tetris>
  </div>
);

export default Game;