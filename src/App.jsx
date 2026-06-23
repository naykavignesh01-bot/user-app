import { useState } from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Mayank", email: "mayank6354@gmail.com", active: true },
    { id: 2, name: "Het", email: "het7048@gmail.com", active: false },
    { id: 3, name: "Akshit", email: "akshit9023@gmail.com", active: true },
    { id: 4, name: "Meet", email: "meet8799@gmail.com", active: false },
    { id: 5, name: "Harsh", email: "harsh9227@gmail.com", active: true },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });

  const toggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const addUser = () => {
    if (!newUser.name || !newUser.email) return;

    const newEntry = {
      id: Date.now(),
      name: newUser.name,
      email: newUser.email,
      active: true,
    };

    setUsers([...users, newEntry]);
    setNewUser({ name: "", email: "" });
  };

  const filteredUsers = users.filter((user) => {
    const matchSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "all"
        ? true
        : filter === "active"
        ? user.active
        : !user.active;

    return matchSearch && matchFilter;
  });

  return (
    <div className="app-container">
      <h1>User List App</h1>

      <div className="top-section">
        {/* Search */}
        <input
          className="search-input"
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Add User */}
        <div className="form-section">
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) =>
              setNewUser({ ...newUser, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) =>
              setNewUser({ ...newUser, email: e.target.value })
            }
          />

          <button onClick={addUser}>Add User</button>
        </div>

        {/* Filters */}
        <div className="filter-buttons">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("active")}>Active</button>
          <button onClick={() => setFilter("inactive")}>Inactive</button>
        </div>
      </div>

      {/* Users */}
      {filteredUsers.length === 0 ? (
        <h2>No users found</h2>
      ) : (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            toggleStatus={toggleStatus}
            deleteUser={deleteUser}
          />
        ))
      )}
    </div>
  );
}

export default App;