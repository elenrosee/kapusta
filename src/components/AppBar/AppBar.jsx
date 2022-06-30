import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn, getUserMail, logOut } from 'redux/user';
import { useMediaQuery } from 'react-responsive';

import {
  AppBarWrapper,
  LogoNavLink,
  LogOutButton,
  LogOutIcon,
  UserMenu,
  UserName,
} from './AppBar.styled';
import logout from 'images/logout.svg';
import { Breakpoints, Modal } from 'common';
import { SvgLogo } from 'iconComponents';

export const AppBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const userMail = useSelector(getUserMail);

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  return (
    <AppBarWrapper>
      <LogoNavLink to="/transactions">
        <SvgLogo size="size4" />
      </LogoNavLink>
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
