import styled from 'styled-components';
import { Breakpoints, MQ } from 'common';

export const Modal = styled.div`
  position: absolute;
  z-index: 10;

  left: -17px;
  top: 68px;

  ${MQ(Breakpoints.md)} {
    left: 110px;
    top: 48px;
  }

  ${MQ(Breakpoints.lg)} {
    left: 410px;
  }
`;

export const Arrow = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  transform: rotate(45deg);
  margin-left: 75px;

  ${MQ(Breakpoints.md)} {
    margin-left: 50px;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  color: white;
  top: 10px;
  width: 282px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  border-radius: 30px;

  padding: 30px 25px;
`;

export const FirstText = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const SecondText = styled.p``;
