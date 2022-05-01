/* eslint-disable no-unused-vars */
import { Breakpoints, Button, MQ } from 'common';
import styled from 'styled-components';
import backArrow from 'images/backArrow.svg';
import calculator from 'images/calculator.svg';

export const FormContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;

  ${MQ(Breakpoints.lg)} {
    display: flex;
    justify-content: space-between;
  }
`;

export const ArrowBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: inherit;
  background-image: url(${backArrow});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${MQ(Breakpoints.md)} {
    flex-direction: row;
  }

  ${MQ(Breakpoints.lg)} {
    display: inline-flex;
  }
`;

export const Input = styled.input`
  padding: 0 20px;
  width: 282px;
  height: 44px;
  background-color: transparent;
  border: 2px solid var(--bg-text-color);
  outline: none;

  &::placeholder {
    color: var(--color-placeholder);
  }

  ${MQ(Breakpoints.md)} {
    border: 2px solid var(--bg-color);
  }
`;

export const InputDescription = styled(Input)`
  border-bottom: none;
  border-radius: 20px 20px 0 0;

  ${MQ(Breakpoints.md)} {
    border: 2px solid var(--bg-color);
    border-radius: 16px 0 0 0;
    width: 192px;
  }

  ${MQ(Breakpoints.lg)} {
    width: 289px;
  }
`;

export const ChooseCategoryBtn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 0 0 20px 0;
  margin-bottom: 30px;
  padding: 0 20px;
  width: 282px;
  height: 44px;
  background-color: transparent;
  border: 2px solid var(--bg-text-color);
  outline: none;

  color: var(--color-placeholder);

  ${MQ(Breakpoints.md)} {
    border: 2px solid var(--bg-color);
    border-radius: 0;
    border-left: none;
    margin: 0;
    width: 171px;
  }

  ${MQ(Breakpoints.lg)} {
    width: 188px;
  }
`;

export const InputSum = styled(Input)`
  width: 183px;
  border-radius: 30px;
  margin-bottom: 30px;
  padding: 0 60px 0 30px;

  background-image: url(${calculator});
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right 30px bottom 50%;

  ${MQ(Breakpoints.md)} {
    border-radius: 0 16px 16px 0;
    border-left: none;
    margin-bottom: 0;
    width: 104px;
  }

  ${MQ(Breakpoints.md)} {
    width: 124px;
  }
`;

export const BtnWraper = styled.div`
  display: flex;
  justify-content: center;

  ${MQ(Breakpoints.md)} {
    margin-top: 30px;
  }

  ${MQ(Breakpoints.lg)} {
    display: inline-flex;
    margin-top: 0;
  }
`;

export const Btn = styled(Button)`
  background-color: var(--bg-color);
`;
