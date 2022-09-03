import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const { id } = useParams();
  const [items, setItems] = useState({});
  const [image,setImage]=useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return <h1 className="middle spinner"></h1>;
  }

  const fetchItems = async () => {
    setLoading(true);
    const fetchItem = await fetch(
      `https://boiling-inlet-40081.herokuapp.com/articles/${id}`
    );
    const item = await fetchItem.json();
    setItems(item);
    setImage(item.image)
    setLoading(false);
  };
  return (
    <>
      {
        image.map((img)=>{
          return(
            <div className=" singleImage">
              <img src={img.url} alt="" />
            </div>
          )
        })
      }
      <h1>{items.Title}</h1>
      <p>{items.content}</p>
      <h4>Edited by : {items.editor}</h4>
    </>
  );
}

export default Item;
