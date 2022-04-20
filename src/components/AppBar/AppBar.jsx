import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUserMail, logOut } from 'redux/user';
import { useMediaQuery } from 'react-responsive';

import { Logo } from 'components/Logo';

import {
  AppBarWrapper,
  LogOutButton,
  LogOutIcon,
  UserMenu,
  UserName,
} from './AppBar.styled';
import logout from 'images/logout.svg';
import { Breakpoints, Modal } from 'common';

export const AppBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userMail = useSelector(getUserMail);

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  return (
    <AppBarWrapper>
      <Logo />
      {isLoggedIn && (
        <UserMenu>
          <UserName>{userMail}</UserName>
          <LogOutButton
            type="button"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            {isMobile ? (
              <LogOutIcon src={logout} alt="Иконка выхода" />
            ) : (
              'Выйти'
            )}
          </LogOutButton>
        </UserMenu>
      )}
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onAgree={() => dispatch(logOut())}
          title="Вы действительно хотите выйти?"
        />
      )}
    </AppBarWrapper>
  );
};
