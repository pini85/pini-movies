import React, { useState } from "react";
import { Wizard } from "react-use-wizard";
import { recommendationQuestions } from "./utils";
import Step from "./components/Step/Step";

const FindRecommendations = () => {
  const [answers, setAnswers] = useState(
    recommendationQuestions.map((question) => ({
      question: question.question,
      selectedAnswers: [],
    }))
  );
  console.log(answers);

  const handleCheckboxChange = (stepIndex, answer) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      const selectedAnswers = newAnswers[stepIndex].selectedAnswers;
      if (selectedAnswers.includes(answer)) {
        newAnswers[stepIndex].selectedAnswers = selectedAnswers.filter(
          (a) => a !== answer
        );
      } else {
        newAnswers[stepIndex].selectedAnswers.push(answer);
      }
      return newAnswers;
    });
  };

  return (
    <Wizard>
      {recommendationQuestions.map((question, index) => (
        <Step
          key={index}
          question={question.question}
          answers={question.answers}
          selectedAnswers={answers[index].selectedAnswers}
          handleCheckboxChange={(answer) => handleCheckboxChange(index, answer)}
        />
      ))}
    </Wizard>
  );
};

export default FindRecommendations;
