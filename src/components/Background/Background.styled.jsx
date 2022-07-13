import { Breakpoints, MQ } from 'common';
import styled from 'styled-components';

export const BackgroundWraper = styled.div`
  position: absolute;
  z-index: -1;

  width: 100%;
`;

export const GreyBackground = styled.div`
  display: flex;

  width: 100%;
  height: 257px;
  border-radius: 0 0 0 120px;
  background-color: var(--bg-color);

  padding-top: 28px;
  padding-left: 10px;

  ${MQ(Breakpoints.md)} {
    height: 526px;
  }
`;
