import { Breakpoints, MQ } from 'common';
import styled from 'styled-components';

export const Wraper = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 135px;
  margin-bottom: 30px;

  ${MQ(Breakpoints.md)} {
    margin-bottom: 0px;
  }
`;

export const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
`;
