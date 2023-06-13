import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DetailArtikel.css";

const DetailArtikel = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch the specific article from the API endpoint
    axios
      .get(`https://64507b91a3221969114b394b.mockapi.io/Artikel/${articleId}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, [articleId]);

  if (!article) {
    return <div>Loading...</div>;
  }

console.log(article)


  return (
    <div>
      {/* Render the article details */}
      <h1>{article.judul}</h1>
      <img src={article.gambar} alt="Deskripsi Gambar" className="gambarartikel" />
      <p>{article.detail}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DetailArtikel;
