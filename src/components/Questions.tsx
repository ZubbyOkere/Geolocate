"use client";
import React from "react";
import Options from "./Options";

type Props = {};

export default function Questions({ question, dispatch, answer }: any) {
  //   if (!question) return null;
  console.log(question);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}
