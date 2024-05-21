import styled, { keyframes, css } from "styled-components/macro";

import { ReactComponent as Skip } from "../../../../assets/skip-icon.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35rem;
  margin-bottom: 4rem;
`;
export const RotatingSkip = styled(Skip)`
  ${({ startAnimation }) =>
    startAnimation &&
    css`
      animation: ${rotate} 0.8s ease-in-out;
    `}
`;

export const MovieCardContainer = styled.div`
  display: flex;
  width: 40rem;
  height: 45rem;
  margin-bottom: 4rem;
`;
