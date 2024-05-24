import React from "react";
import * as S from "./CheckBox.styles";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <S.CheckboxContainer>
      <input type="checkbox" checked={checked} onChange={onChange} id={label} />
      <label for={label}>{label}</label>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
