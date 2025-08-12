import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const sheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLQsMEKHk-MjYwgy-6cvEHe7Wy-hhg1X4W1UQW-OKPFo_jHwfeZDTWezf5krxa44Pj_rt-8NwEU6fZ/pub?output=csv";

    fetch(sheetUrl)
      .then((res) => res.text())
      .then((csv) => {
        const rows = csv.split("\n").map((row) => row.split(","));
        const headers = rows.shift();
        const data = rows.map((row) =>
          headers.reduce((obj, header, i) => {
            obj[header.trim()] = row[i];
            return obj;
          }, {})
        );
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h1>Our Products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={p.image_url} alt={p.name} style={{ width: "100%" }} />
            <h2>{p.name}</h2>
            <p>${p.price}</p>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
