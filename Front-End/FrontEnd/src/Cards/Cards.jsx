import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards() {
  const cards = [
    { title: "Card 1", img: "link1", par: "some par" },
    { title: "Card 2", img: "link2", par: "some par" },
    { title: "Card 3", img: "link3", par: "some par" },
  ];
  return (
    <>
      return ({" "}
      <div style={{ display: "flex", gap: "20px" }}>
        {" "}
        {cards.map((c, index) => (
          <Card key={index} title={c.title} img={c.img} par={c.par} />
        ))}{" "}
      </div>
    </>
  );
}
