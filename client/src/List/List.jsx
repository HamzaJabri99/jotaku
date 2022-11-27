import { useEffect } from "react";
import Card from "../components/Card/Card";
import "./list.scss";
const List = ({ catId, sortPrice, maxPrice }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/13666115/pexels-photo-13666115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      img2: "https://images.pexels.com/photos/13666609/pexels-photo-13666609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "sports",
      isNew: true,
      oldPrice: 200,
      price: 150,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3379242/pexels-photo-3379242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "jacket",
      isNew: true,
      oldPrice: 500,
      price: 250,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/3081699/pexels-photo-3081699.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "hat",
      oldPrice: 100,
      price: 50,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "glasses",
      oldPrice: 1000,
      price: 550,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "glasses",
      oldPrice: 1000,
      price: 550,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "glasses",
      oldPrice: 1000,
      price: 550,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "glasses",
      oldPrice: 250,
      price: 240,
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "glasses",
      oldPrice: 300,
      price: 200,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "glasses",
      oldPrice: 100,
      price: 50,
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "glasses",
      oldPrice: 60,
      price: 30,
    },
  ];
  useEffect(() => {});
  return (
    <div className="list">
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
