import React from "react";

export default function Contador({
  count,
  onClickIncrementar,
  onClickDescrementar,
  onClickReset,
}) {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <div>
          <p>Contador : {count}</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginBottom: "1rem",
          }}
        >
          <button
            className="btn btn-primary"
            onClick={() => onClickIncrementar()}
            style={{ margin: "1rem" }}
          >
            Incrementar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => onClickDescrementar()}
            style={{ margin: "1rem" }}
          >
            Descrementar
          </button>
          <button
            className="btn btn-secondary"
            style={{ margin: "1rem" }}
            onClick={() => onClickReset()}
          >
            resetear
          </button>
        </div>
      </div>
    </div>
  );
}
