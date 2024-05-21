import React from "react";
import * as S from "./CheckBox.styles";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <S.CheckboxContainer>
      <S.HiddenCheckbox checked={checked} onChange={onChange} />
      <S.StyledCheckbox checked={checked} onClick={onChange}>
        {label}
      </S.StyledCheckbox>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
