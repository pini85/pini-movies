import React, { useState } from "react";
import { Wizard } from "react-use-wizard";
import { recommendationQuestions } from "./utils";
import Step from "./components/Step/Step";

const FindRecommendations = ({ closeModal }) => {
  const [answers, setAnswers] = useState(
    recommendationQuestions.map((question) => ({
      question: question.question,
      selectedAnswers: [],
    }))
  );
  console.log({ answers });

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

  const handleEmotionChange = (stepIndex, value) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[stepIndex].selectedAnswers = [value];
      return newAnswers;
    });
  };

  const handleInputChange = (stepIndex, value) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[stepIndex].selectedAnswers = [value];
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
          handleInputChange={(value) => handleInputChange(index, value)}
          handleEmotionChange={(value) => handleEmotionChange(index, value)}
          closeModal={closeModal}
        />
      ))}
    </Wizard>
  );
};

export default FindRecommendations;
