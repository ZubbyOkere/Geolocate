import React from "react";

type Props = {};

const Finished = ({ points, numPoints, highscore, dispatch }: any) => {
  const percentage = (points / numPoints) * 100;
  return (
    <div>
      <p className="result">
        You scored
        <strong>
          {points} out of {numPoints} and your percentage is (
          {Math.ceil(percentage)})
        </strong>
      </p>
      <p className="highscore">Highscore {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
};

export default Finished;
