import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Details() {
  const [items, setItems] = useState([]);
  const [readMore, setReadMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const url = "https://boiling-inlet-40081.herokuapp.com/articles";
  // const secondUrl=;

  const fetchItems = async () => {
    setLoading(true);
    const data = await fetch(url);
    const items = await data.json();
    setItems(items);
    setLoading(false);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return <h2 className="spinner "></h2>;
  }
  return (
    <>
      <section>
        <h1 className="middle"></h1>
        {items.map((item) => {
          const { image, Title, id, content } = item;
          return (
            <div key={id} className="card">
              {image.map((img) => {
                return (
                  <div key={id} className="grid-box">
                    <div>
                      <Link to={`/Details/${id}`}>
                        <img src={img.url} alt="" />
                      </Link>
                    </div>
                    <div>
                      <h2>{Title}</h2>
                      <p>
                        {content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Details;
