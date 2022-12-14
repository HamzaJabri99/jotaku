import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import List from "../../List/List";
import "./products.scss";
const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortPrice, setSortPrice] = useState("asc");
  const [selectedSub, setSelectedSub] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?populate=*&filters [categories] [id] [$eq]=${catId}`
  );
  //const subcategories = data?.attributes.sub_categories;

  const handleSelectedSub = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSub(
      isChecked
        ? [...selectedSub, value]
        : selectedSub.filter((item) => item !== value)
    );
    // setSelectedSub((prev) =>
    //   prev.includes(e.target.value)
    //     ? prev.filter((val) => e.target.value !== val)
    //     : [...prev, e.target.value]
    // );
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((cat) => (
            <div className="inputItem" key={cat.id}>
              <input
                type="checkbox"
                name=""
                id={cat.id}
                value={cat.id}
                onChange={handleSelectedSub}
              />
              <label htmlFor={cat.id}>{cat?.attributes?.title}</label>
            </div>
          ))}
          {/* <div className="inputItem">
            <input type="checkbox" name="" id="cat1" value={1} />
            <label htmlFor="cat1">Accessories</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="cat2" value={2} />
            <label htmlFor="cat2">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="" id="cat3" value={3} />
            <label htmlFor="cat3">Shoes</label>
          </div> */}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc"
              onChange={(e) => setSortPrice(e.target.value)}
            />
            <label htmlFor="asc">Price (Lowest)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => setSortPrice(e.target.value)}
            />
            <label htmlFor="desc">Price (Highest)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sortPrice={sortPrice}
          selectedSub={selectedSub}
        />
      </div>
    </div>
  );
};

export default Products;
