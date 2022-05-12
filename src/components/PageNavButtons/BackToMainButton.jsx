import { Breakpoints } from 'common';
import { SvgBackArrow } from 'iconComponents';
import { useMediaQuery } from 'react-responsive';
import { BackToMainNavLink } from './BackToMainButton.styled';

export const BackToMainButton = () => {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  return (
    <BackToMainNavLink to="/transactions">
      <SvgBackArrow fill={`var(--accent-color)`} />
      {!isMobile && <p>Вернутся на главную</p>}
    </BackToMainNavLink>
  );
};
