import { Breakpoints, Container, MQ } from 'common';
import styled from 'styled-components';

export const AuthViewContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: fit-content;

  padding-top: 86px;
  padding-bottom: 76px;

  ${MQ(Breakpoints.md)} {
    width: fit-content;
    padding-top: 90px;
    padding-bottom: 192px;
  }

  ${MQ(Breakpoints.lg)} {
    flex-direction: row;

    padding-top: 117px;
    padding-bottom: 142px;
    padding-left: 230px;
  }
`;

export const PageLogo = styled.div`
  margin-right: auto;
  margin-bottom: 50px;
  margin-left: 40px;

  ${MQ(Breakpoints.md)} {
    margin-left: 0px;
  }

  ${MQ(Breakpoints.lg)} {
    margin-right: 127px;
  }
`;

export const LogoText = styled.h3`
  display: block;

  font-weight: 700;
  font-size: 13px;
  line-height: 15px;
  color: var(--text-color-3);
  text-transform: uppercase;

  margin-left: 11px;

  ${MQ(Breakpoints.md)} {
    font-size: 16px;
    line-height: 19px;

    margin-left: 54px;
  }

  ${MQ(Breakpoints.lg)} {
    margin-left: 72px;
  }
`;
