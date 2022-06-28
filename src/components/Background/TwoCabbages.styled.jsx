import { Breakpoints, MQ } from 'common';
import styled from 'styled-components';

export const Wraper = styled.div`
  display: flex;

  width: 183px;
  height: 142px;

  position: fixed;
  left: 35px;
  bottom: 50px;

  ${MQ(Breakpoints.md)} {
    left: 103px;
  }

  ${MQ(Breakpoints.lg)} {
    left: 230px;
  }

  div {
    display: flex;
    flex-direction: column;

    :first-child {
      margin-top: 19px;

      svg {
        transform: rotate(90deg);
      }
    }
  }
`;

export const Ellipse = styled.span`
  width: 67px;
  height: 14px;

  background-color: var(--bg-color);
  border-radius: 250px/50px;

  margin-top: 29px;
  margin-left: auto;
  margin-right: auto;
`;
