import React from "react";

type Props = {};

const Progress = ({ numQuestions, index, points, numPoints, answer }: any) => {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Questions
        <strong>{index + 1}/</strong>
        {numQuestions}
      </p>
      <p>
        <strong>{points}/</strong>
        {numPoints}
        Points
      </p>
    </header>
  );
};

export default Progress;
