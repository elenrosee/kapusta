const getIsLoggedIn = state => state.user.isLoggedIn;

const getUserMail = state => state.user.user.email;

const getUserBalance = state => state.user.user.balance;

const getIsFetchingCurrent = state => state.user.isFetchingCurrent;

export { getIsLoggedIn, getUserMail, getUserBalance, getIsFetchingCurrent };
