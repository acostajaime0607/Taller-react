/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Card({ dataList, count }) {
  return (
    <>
      <div className="card" style={{ width: "12rem" }}>
        <img
          src={dataList.image}
          className="card-img-top"
          style={{ width: "100%", objectFit: "cover", height: "200px" }}
          alt="..."
        />
        <div className="card-body">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "12px" }}>{dataList.title}</p>
            <p style={{ fontSize: "12px" }}>Contador : {count}</p>
          </div>
          <p style={{ fontSize: "12px", textAlign: "justify" }}>
            {dataList.description}
          </p>
          <a href="#" className="btn btn-primary" title="Detalle">
            Detalle
          </a>
        </div>
      </div>
    </>
  );
}
