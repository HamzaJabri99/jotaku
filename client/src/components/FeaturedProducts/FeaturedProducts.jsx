import Card from "../Card/Card";
import "./featuredProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/13666115/pexels-photo-13666115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/13666609/pexels-photo-13666609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "sports",
      isNew: true,
      oldPrice: 19,
      price: 15,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3379242/pexels-photo-3379242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "jacket",
      isNew: true,
      oldPrice: 19,
      price: 15,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3081699/pexels-photo-3081699.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      oldPrice: 19,
      price: 15,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "glasses",
      oldPrice: 19,
      price: 15,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eaque
          nostrum fugiat architecto illo praesentium, itaque quod dignissimos
          nobis? Quam labore corrupti, quo accusamus dolorum sapiente
          perspiciatis numquam sed officia.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
