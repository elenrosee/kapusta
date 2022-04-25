import { Button } from 'common';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0px;
`;

export const Btn = styled(Button)`
  border: none;
  border-radius: 0;
  width: calc(calc(100vw / 2) - 1px);
  background-color: var(--bg-color);

  &.active {
    color: white;
    background-color: var(--accent-color);
  }

  &:first-child {
    margin-right: 2px;
  }
`;
