import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
      setData(user);
    }
  }, [id]);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Details of User</h3>
        <div className="mb-2">
          <strong>Name: {data.name}</strong>
        </div>
        <div className="mb-2">
          <strong>Email: {data.email}</strong>
        </div>
        <div className="mb-3">
          <strong>Phone: {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">
          Edit
        </Link>
        <Link to="/" className="btn btn-success ms-2">
          Back
        </Link>
      </div>
    </div>
  );
}

export default Read;
