import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const data = async () => {
    try {
      const res = await axios.get("/api/user");
      const users = res.data;
      setUsers(users.data);
      console.log(users.data);
      data();
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, email, password };
    try {
      await axios.post("/api/user", payload);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <form onSubmit={handleSubmit}>
      <div className="App">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </div>
      <Link to="/other">Other Page</Link>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
    </form>
  );
}

export default Form;
