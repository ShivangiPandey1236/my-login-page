
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
const navigate = useNavigate();

const handleLogout = () => {
localStorage.removeItem("loggedin");
navigate("/login");
};

const [data, setData] = useState([]); //state to store fetched data

useEffect(() => {
const fetchData = async () => {
const url = "https://jsonplaceholder.typicode.com/users";

const localData = JSON.parse(localStorage.getItem("users"));

if (localData && localData.length > 0) {
setData(localData);
} else {
try {
const response = await axios.get(url);
localStorage.setItem("users", JSON.stringify(response.data));
setData(response.data);
} catch (error) {
console.error("Error fetching data:", error);
}
}
};

fetchData();
}, []);

const handleDelete = (id) => {
const confirm = window.confirm("Would you like to delete?");
if (confirm) {
const users = JSON.parse(localStorage.getItem("users")) || [];

const updatedUsers = users.filter((user) => user.id !== id);

localStorage.setItem("users", JSON.stringify(updatedUsers));

setData(updatedUsers);

navigate("/");
}
};

return (
<div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
<p>List of Users</p>
<div className="w-75 rounded bg-white border shadow p-4">
<div className="d-flex justify-content-end">
<Link to="/create" className="btn btn-success">
Add +
</Link>
</div>
<table className="table table-striped">
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{data.map((user, index) => {
return (
<tr key={index}>
<td>{user.id}</td>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.phone}</td>

<td>
<Link
to={`/read/${user.id}`}
className="btn btn-sm btn-info me-2"
>
View
</Link>
<Link
to={`/update/${user.id}`}
className="btn btn-sm btn-primary me-2"
>
Edit
</Link>
<button
onClick={() => handleDelete(user.id)}
className="btn btn-sm btn-danger"
>
Delete
</button>
</td>
</tr>
);
})}
</tbody>
</table>
</div>

<button
onClick={handleLogout}
type="button"
className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white"
>
LOGOUT
</button>
</div>
);
}