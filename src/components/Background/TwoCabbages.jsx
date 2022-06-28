import { SvgCabbage } from 'iconComponents';
import { Ellipse, Wraper } from './TwoCabbages.styled';

export const TwoCabbages = () => {
  return (
    <Wraper>
      <div>
        <SvgCabbage />
        <Ellipse />
      </div>
      <div>
        <SvgCabbage />
        <Ellipse />
      </div>
    </Wraper>
  );
};
