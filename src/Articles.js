import { Link } from "react-router-dom";

function Articles({ isLogin, data }) {
  if (!isLogin) {
    throw new Error("Auth Failed");
  }

  return (
    <ul className="articles">
      {data.map((article, index) => (
        <li key={index}>
          <Link to={"articles/" + article.slug}>
            <h3>{article.title}</h3>
          </Link>
          <small>{article.author}</small>
        </li>
      ))}
    </ul>
  );
}

export default Articles;
