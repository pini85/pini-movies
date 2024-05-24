import React from "react";
import * as S from "./Step.styles";
import Button from "components/Button/Button";
import Checkbox from "components/CheckBox/CheckBox";
import { useWizard } from "react-use-wizard";

// Import the components
import HappyEmotion from "../HappyEmotion/HappyEmotion";
import NeutralEmotion from "../NeutralEmotion/NeutralFace";
import SadEmotion from "../SadEmotion/SadEmotion";

// Map component names to components
const componentMap = {
  HappyEmotion,
  NeutralEmotion,
  SadEmotion,
};

const Step = ({
  question,
  answers,
  selectedAnswers,
  handleCheckboxChange,
  handleInputChange,
  handleEmotionChange,
}) => {
  const { previousStep, nextStep, isLastStep, isFirstStep } = useWizard();

  return (
    <S.Container>
      <S.Header>{question}</S.Header>
      <S.AnswersContainer>
        {answers.map((answer, index) => {
          switch (answer.type) {
            case "component":
              const Component = componentMap[answer.content];
              return (
                <S.ComponentContainer key={index}>
                  <Component
                    handleClick={handleEmotionChange}
                    answers={answers}
                  />
                </S.ComponentContainer>
              );
            case "checkbox":
              return (
                <S.CheckBoxContainer key={index}>
                  <Checkbox
                    label={answer.content}
                    checked={selectedAnswers.includes(answer.value)}
                    onChange={() => handleCheckboxChange(answer.value)}
                  />
                </S.CheckBoxContainer>
              );
            case "input":
              return (
                <S.InputContainer key={index}>
                  <input
                    type="text"
                    placeholder={answer.content}
                    value={selectedAnswers[0] || ""}
                    onChange={(e) => handleInputChange(e.target.value)}
                  />
                </S.InputContainer>
              );
            default:
              return null;
          }
        })}
      </S.AnswersContainer>
      <S.ButtonContainer>
        <Button
          disabled={isFirstStep}
          title="Previous Step"
          handleClick={previousStep}
        />
        <Button
          disabled={isLastStep}
          title="Next Step"
          handleClick={nextStep}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Step;
