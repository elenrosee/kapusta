export const AppBar = isLoggedIn => {
  return (
    <>
      <p>Logo</p>
      {isLoggedIn && <p>UserMenu</p>}
    </>
  );
};
