import { Breakpoints } from 'common';
import { AuthForm } from 'components';
import { SvgLogo } from 'iconComponents';
import { useMediaQuery } from 'react-responsive';
import { AuthViewContainer, LogoText, PageLogo } from './AuthView.styled';

export default function AuthView() {
  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });
  const isTablet = useMediaQuery({
    minWidth: Breakpoints.md,
    maxWidth: Breakpoints.lg - 1,
  });
  const isDesktop = useMediaQuery({ minWidth: Breakpoints.lg });

  return (
    <AuthViewContainer>
      <PageLogo>
        {isMobile && <SvgLogo size="size3" />}
        {isTablet && <SvgLogo size="size2" />}
        {isDesktop && <SvgLogo size="size1" />}
        <LogoText>Smart Finance</LogoText>
      </PageLogo>

      <AuthForm />
    </AuthViewContainer>
  );
}
