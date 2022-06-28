/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { SvgCabbage } from 'iconComponents';
import { CabbagesWraper, OneCabbage, Wraper } from './Cabbages.styled';
import { v4 as uuidv4 } from 'uuid';

export const Cabbages = ({ typeView }) => {
  const Cabbages = () => {
    const cabbagesAmount = Math.ceil(window.screen.width / 124);
    const cabbages = [];

    for (let i = 0; i < cabbagesAmount; i += 1) {
      cabbages.push(<SvgCabbage key={uuidv4()} />);
    }

    return cabbages;
  };

  return (
    <Wraper typeView={typeView}>
      <CabbagesWraper>{Cabbages()}</CabbagesWraper>
      <OneCabbage>
        <SvgCabbage />
      </OneCabbage>
    </Wraper>
  );
};
