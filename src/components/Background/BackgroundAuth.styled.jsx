import { Breakpoints, MQ } from 'common';
import styled from 'styled-components';

export const GreyBackground = styled.div`
  display: flex;

  width: 100%;
  height: 342px;
  border-radius: 0 0 0 120px;
  background-color: var(--bg-color);

  position: fixed;
  z-index: -1;

  ${MQ(Breakpoints.md)} {
    height: 583px;
  }
`;
