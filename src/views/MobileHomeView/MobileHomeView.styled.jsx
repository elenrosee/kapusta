import { Container } from 'common';
import styled from 'styled-components';

export const MobilleHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 30px;
  padding-bottom: 40px;
`;

export const MobileViewContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 96px);
`;
