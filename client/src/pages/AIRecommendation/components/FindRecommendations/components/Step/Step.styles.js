import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CheckBoxContainer = styled.div`
  width: 12rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 4rem;
`;

export const AnswersContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 5rem;
`;

export const Header = styled.h2`
  font-size: var(--heading-tertiary);
  font-weight: 700;
  color: var(--text-white);
  text-align: center;
  margin-bottom: 2rem;
`;

export const InputContainer = styled.div`
  width: 12rem;
  margin-bottom: 10px;
`;

export const ComponentContainer = styled.div`
  margin: 1rem;
`;
