import React from "react";

export default function MyTitle({ title }: any) {
  return (
    <div style={{ padding: "1rem 0.5rem" }}>
      <h1 style={{ fontSize: "20px", fontWeight: "600" }}>{title}</h1>
    </div>
  );
}
