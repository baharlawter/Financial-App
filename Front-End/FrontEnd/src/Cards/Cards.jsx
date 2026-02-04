import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards() {
  const items = [
    { title: "Get Out of Debt", link: "/debt" },
    { title: "Buy Real Estate", link: "/real-estate" },
    { title: "Create a Budget", link: "/budget" },
    { title: "Save for retirement", link: "retirment" },
  ];

  return (
    <div className="card-grid">
      {items.map((item) => (
        <Link to={item.link} className="card" key={item.title}>
          <div className="icon">{item.icon}</div>
          <h3>{item.title}</h3>
        </Link>
      ))}
    </div>
  );
}
