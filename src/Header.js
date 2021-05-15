import UserInfo from "./UserInfo";

function Header({
  changeNavbar,
  logoutHandler,
  isLogin,
  loginHandler,
  handleModal,
  userInfo
}) {
  return (
    <div className="header">
      <div className="header-logo">
        <svg
          className="site-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M512 256a15 15 0 00-7.1-12.8l-52-32 52-32.5a15 15 0 000-25.4L264 2.3c-4.8-3-11-3-15.9 0L7 153.3a15 15 0 000 25.4L58.9 211 7.1 243.3a15 15 0 000 25.4L58.8 301 7.1 333.3a15 15 0 000 25.4l241 151a15 15 0 0015.9 0l241-151a15 15 0 00-.1-25.5l-52-32 52-32.5A15 15 0 00512 256zM43.3 166L256 32.7 468.7 166 256 298.3 43.3 166zM468.6 346L256 479.3 43.3 346l43.9-27.4L248 418.7a15 15 0 0015.8 0L424.4 319l44.2 27.2zM256 388.3L43.3 256l43.9-27.4L248 328.7a15 15 0 0015.8 0L424.4 229l44.1 27.2L256 388.3z" />
        </svg>
        <span className="site-title">Dashboard</span>
      </div>
      <div className="header-search">
        <button className="button-menu" onClick={changeNavbar}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385">
            <path d="M12 120.3h361a12 12 0 000-24H12a12 12 0 000 24zM373 180.5H12a12 12 0 000 24h361a12 12 0 000-24zM373 264.7H132.2a12 12 0 000 24H373a12 12 0 000-24z" />
          </svg>
        </button>
        <input type="search" placeholder="Search Documentation..." />
      </div>
      {isLogin ? (
        <>
          <UserInfo data={userInfo} />
          <button className="logout" onClick={logoutHandler}>
            Log Out
          </button>
        </>
      ) : (
        <button onClick={() => handleModal(true)} className="logout">
          Log In
        </button>
      )}
    </div>
  );
}

export default Header;
