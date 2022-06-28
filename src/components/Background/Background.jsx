/* eslint-disable react/prop-types */
import { BackgroundWraper, GreyBackground } from './Background.styled';
import { Cabbages } from './Cabbages';
import { TwoCabbages } from './TwoCabbages';

/* eslint-disable no-unused-vars */
export const Background = ({ pageType }) => {
  return (
    <BackgroundWraper>
      <GreyBackground>{pageType === 'AuthPage' && <Cabbages />}</GreyBackground>
      {pageType === 'HomePage' && <Cabbages typeView={'HomePage'} />}
      {pageType === 'AuthPage' && <TwoCabbages />}
      {pageType === 'ReportsPage' && (
        <>
          <Cabbages typeView={'HomePage'} />
          {/* here I can add two cabbages with different positioning */}
        </>
      )}
    </BackgroundWraper>
  );
};
