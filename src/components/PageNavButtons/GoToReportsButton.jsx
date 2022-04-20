import { Image, ToRaportsNavLink } from './GoToReportsButton.styled';

export const GoToReportsButton = () => {
  return (
    <ToRaportsNavLink to="/reports">
      Перейти к отчетам
      <Image />
    </ToRaportsNavLink>
  );
};
