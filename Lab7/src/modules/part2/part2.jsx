import { Link } from "react-router";
import "./styles.css";

const GoodsCard = ({ title, price, image }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        padding: "1rem",
        margin: "1rem",
        borderRadius: "5px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        height: "300px",
        width: "300px",
      }}
    >
      <img style={{ width: "100%", height: "200px" }} src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
};

export const Part2 = () => {
  const goods = [
    {
      title: "iPhone 12",
      price: "400$",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "iPhone 12 Pro",
      price: "430$",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "iPhone 12 Pro Max",
      price: "450$",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "iPhone SE",
      price: "300$",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "iPhone 12 mini",
      price: "400$",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "iPhone 13 Pro Max",
      price: "550$",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <div className="part2">
      <h2>Part 2</h2>
      <Link to={"/"}>Go to the part 1</Link>
      <div className="goods-container">
        {goods.map((good) => (
          <GoodsCard title={good.title} price={good.price} image={good.image} />
        ))}
      </div>
    </div>
  );
};
