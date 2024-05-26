import React from "react";
import * as S from "./Step.styles";
import Button from "components/Button/Button";
import Checkbox from "components/CheckBox/CheckBox";
import { useWizard } from "react-use-wizard";

// Import the components
import HappyEmotion from "../HappyEmotion/HappyEmotion";
import NeutralEmotion from "../NeutralEmotion/NeutralFace";
import SadEmotion from "../SadEmotion/SadEmotion";
import ActorInput from "pages/AdvancedSearch/components/FormInput/Inputs/ActorInput";
import DirectorInput from "pages/AdvancedSearch/components/FormInput/Inputs/DirectorInput";
import { AdvancedFormProvider } from "pages/AdvancedSearch/context/advancedSearchFormContext";
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
  const { previousStep, nextStep, isLastStep, isFirstStep } = useWizard();
  const emotionAnswers = answers.filter(
    (answer) => answer.type === "component"
  );

  return (
    <S.Container>
      <S.Header>{question}</S.Header>
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
            case "cast-input":
              return (
                <S.InputContainer key={index}>
                  <AdvancedFormProvider dontShowChoice>
                    <ActorInput width="16rem" />
                    <DirectorInput width="16rem" />
                  </AdvancedFormProvider>
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
