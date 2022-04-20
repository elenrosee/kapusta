/* eslint-disable react/prop-types */
import { Breakpoints, MQ } from 'common/Breakpoints';
import styled from 'styled-components';

const Wraper = styled.div`
  min-width: ${Breakpoints.sm}px;
  max-width: ${Breakpoints.lg}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 19px;
  padding-right: 19px;

  ${MQ(Breakpoints.md)} {
    padding-left: 52px;
    padding-right: 52px;
  }

  ${MQ(Breakpoints.lg)} {
    padding-left: 110px;
    padding-right: 110px;
  }
`;

export const Container = ({ children }) => {
  return <Wraper>{children}</Wraper>;
};
