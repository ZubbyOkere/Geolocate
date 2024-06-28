import React, { useEffect } from "react";

type Props = {};

function Timer({ countdown, dispatch, status }: any) {
  const mins = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
