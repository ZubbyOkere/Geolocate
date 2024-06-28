// import { useQuiz } from "../contexts/QuizContext";

function StartScreen({ question, dispatch }: any) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{question} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let us start
      </button>
    </div>
  );
}

export default StartScreen;
