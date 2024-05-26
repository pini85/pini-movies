import React, { useEffect } from "react";
import { Wizard } from "react-use-wizard";
import { recommendationQuestions } from "./utils";
import Step from "./components/Step/Step";
import { useAdvancedForm } from "pages/AdvancedSearch/context/advancedSearchFormContext";
import { faV } from "@fortawesome/free-solid-svg-icons";

const FindRecommendations = ({ closeModal, answers, setAnswers }) => {
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
  const { inputData } = useAdvancedForm();

  useEffect(() => {
    // Find the index of the question that deals with favorite actors or directors
    const favoriteActorsDirectorsIndex = recommendationQuestions.findIndex(
      (question) => question.question === "Favorite actors and directors?"
    );
    console.log({ favoriteActorsDirectorsIndex });

    // Update the answers state with the new inputData
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      if (favoriteActorsDirectorsIndex !== -1) {
        newAnswers[favoriteActorsDirectorsIndex].selectedAnswers = inputData;
      }
      return newAnswers;
    });
  }, [inputData, setAnswers]);

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
