import React from "react";
import * as S from "./Step.styles";
import Button from "components/Button/Button";
import Checkbox from "components/CheckBox/CheckBox";
import { useWizard } from "react-use-wizard";

import HappyEmotion from "../HappyEmotion/HappyEmotion";
import NeutralEmotion from "../NeutralEmotion/NeutralFace";
import SadEmotion from "../SadEmotion/SadEmotion";
import ActorInput from "pages/AdvancedSearch/components/FormInput/Inputs/ActorInput";
import DirectorInput from "pages/AdvancedSearch/components/FormInput/Inputs/DirectorInput";
import Input from "components/Input/Input.component";
import SelectInput from "components/SelectInput/SelectInput.component";

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
  closeModal,
}) => {
  const {
    previousStep,
    nextStep,
    isLastStep,
    isFirstStep,
    activeStep,
    stepCount,
  } = useWizard();
  console.log({ selectedAnswers });

  return (
    <S.Container>
      <S.Header>{question}</S.Header>
      <S.StepCount>
        {activeStep + 1}/{stepCount}
      </S.StepCount>
      <S.AnswersContainer
        occasionQuestion={question === "What is the occasion?"}
      >
        {answers.map((answer, index) => {
          switch (answer.type) {
            case "component":
              const Component = componentMap[answer.content];

              return (
                <S.ComponentContainer key={index}>
                  <Component
                    handleClick={handleEmotionChange}
                    selectedAnswers={selectedAnswers}
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
            case "cast-input":
              return (
                <S.InputContainer key={index}>
                  <DirectorInput width="18rem" />
                  {/* <ActorInput width="18rem" /> */}
                </S.InputContainer>
              );
            case "input":
              return (
                <S.InputContainer key={index}>
                  <Input placeholder={answer.content} label={answer.content} />
                </S.InputContainer>
              );
            case "selector":
              return (
                <S.SelectorContainer key={index}>
                  <SelectInput
                    title={answer.placeholder}
                    name={answer.value}
                    handleOnChange={handleInputChange}
                    value={selectedAnswers[0]?.[answer.value] || ""}
                  >
                    {answer.content.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </SelectInput>
                </S.SelectorContainer>
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
          title={isLastStep ? "Complete" : "Next Step"}
          handleClick={isLastStep ? closeModal : nextStep}
        />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Step;
