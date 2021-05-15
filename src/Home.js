import Card from "./Card";

function Home({isLogin, userInfo}) {
  return (
    <>
      <h1 className="center">🚀 Welcome to Homepage!</h1>
      {isLogin ? <Card userInfo={userInfo} /> : <p className="center m5">Please Login to display user</p>}
    </>
  );
}

export default Home;
