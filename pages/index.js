import { useEffect, useState } from "react";

export default function Home() {
  const [days, setDays] = useState(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("/api/days")
      .then((res) => res.json())
      .then((data) => {
        setDays(data.days);
        setTitle(data.title);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        fontFamily: "'Orbitron', sans-serif",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
        width: "300px",
        margin: "20px",
        boxShadow: "0 0 20px rgba(255,255,255,0.1)",
        letterSpacing: "2px"
      }}
    >
      <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        {title}
      </div>
      <div style={{ fontSize: "2rem" }}>
        {days !== null ? `${days} DAYS` : "Loading..."}
      </div>
    </div>
  );
}