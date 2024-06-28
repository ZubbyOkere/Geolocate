"use client";
import Error from "@/components/Error";
import Finished from "@/components/Finished";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Main from "@/components/Main";
import NextButton from "@/components/NextButton";
import Progress from "@/components/Progress";
import Questions from "@/components/Questions";
import StartScreen from "@/components/StartScreent";
import Timer from "@/components/Timer";
import Footer from "@/components/Footer";
import React, { useEffect, useReducer, Dispatch } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

interface State {
  questions: Question[];
  status: "loading" | "error" | "ready" | "active" | "finished";
  index: number;
  answer: number | null;
  points: number;
  highscore: number;
  restart: any[]; // The type of 'restart' is not clear from the given code
  countdown: number | null;
}

type Action =
  | { type: "dataReceived"; payload: Question[] }
  | { type: "start" }
  | { type: "dataFailed"; err: any }
  | { type: "newAnswer"; payload: number }
  | { type: "nextQuestion" }
  | { type: "finish" }
  | { type: "restart" }
  | { type: "timer" };

interface Props {}

function initialState(): State {
  return {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    restart: [],
    countdown: null,
  };
}

const SECS = 1;
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "start":
      return {
        ...state,
        status: "active",
        countdown: state.questions.length * SECS,
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "newAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState(),
        status: "ready",
        questions: state.questions,
      };
    case "timer":
      return {
        ...state,
        countdown:
          state.countdown !== null ? Math.max(state.countdown - 1, 0) : null,
        status: state.countdown === 0 ? "finished" : state.status,
      };
  }
}

const Home = (): JSX.Element => {
  const [
    { questions, status, index, answer, points, highscore, restart, countdown },
    dispatch,
  ] = useReducer(reducer, initialState());
  console.log(countdown);

  const numQuestions = questions.length;
  console.log(numQuestions);

  const numPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data: Question[]) => {
        console.log(data);
        dispatch({ type: "dataReceived", payload: data });
      })
      .catch((err) => dispatch({ type: "dataFailed", err }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen question={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              numQuestions={numQuestions}
              index={index}
              points={points}
              numPoints={numPoints}
              answer={answer}
            />
            <Questions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
              index={index}
              numQuestions={numQuestions}
            />
            <Footer>
              <Timer
                dispatch={dispatch}
                countdown={countdown}
                status={status}
              />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                numQuestions={numQuestions}
                index={index}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <Finished
            points={points}
            numPoints={numPoints}
            highscore={highscore}
            restart={restart}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
};

export default Home;
