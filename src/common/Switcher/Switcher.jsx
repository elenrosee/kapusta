/* eslint-disable react/prop-types */
import { SvgArrowhead } from 'iconComponents';
import styled from 'styled-components';

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 135px;
`;

const BtnLeft = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--accent-color);
`;

const BtnRight = styled(BtnLeft)`
  transform: rotate(180deg);
`;

const Text = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: var(--text-color);
  text-transform: uppercase;
`;

export const Switcher = ({ onLeftClick, onRightClick, text }) => {
  return (
    <Wraper>
      <BtnLeft onClick={onLeftClick} name="leftButton">
        <SvgArrowhead height={18} width={8} />
      </BtnLeft>
      <Text>{text}</Text>
      <BtnRight onClick={onRightClick} name="rightButton">
        <SvgArrowhead height={18} width={8} />
      </BtnRight>
    </Wraper>
  );
};
