import styled from 'styled-components';
import { Breakpoints, MQ } from 'common';

export const Container = styled.div`
  margin-top: 30px;

  ${MQ(Breakpoints.md)} {
    width: 100%;
    background: var(--bg-text-color);
    box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
    border-radius: 20px;
    padding: 20px;
  }
`;
