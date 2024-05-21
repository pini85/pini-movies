import React from "react";
import * as S from "./Step.styles";
import Button from "components/Button/Button";
import Checkbox from "components/CheckBox/CheckBox";
import { useWizard } from "react-use-wizard";

const Step = ({
  number,
  question,
  answers,
  selectedAnswers,
  handleCheckboxChange,
}) => {
  const { previousStep, nextStep, isLastStep, isFirstStep } = useWizard();

  return (
    <S.Container>
      <h1>{question}</h1>
      {answers.map((answer, index) => (
        <Checkbox
          key={index}
          label={answer}
          checked={selectedAnswers.includes(answer)}
          onChange={() => handleCheckboxChange(answer)}
        />
      ))}
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
