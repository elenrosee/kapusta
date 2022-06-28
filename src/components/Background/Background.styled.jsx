import { Breakpoints, MQ } from 'common';
import styled from 'styled-components';

export const BackgroundWraper = styled.div`
  position: fixed;
  z-index: -1;

  width: 100%;
  height: 100%;
`;

export const GreyBackground = styled.div`
  display: flex;

  width: 100%;
  height: 342px;
  border-radius: 0 0 0 120px;
  background-color: var(--bg-color);

  padding-top: 28px;
  padding-left: 10px;

  ${MQ(Breakpoints.md)} {
    height: 583px;
  }
`;
