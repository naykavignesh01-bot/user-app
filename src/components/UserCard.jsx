function UserCard({ user, toggleStatus, deleteUser }) {
  return (
    <div
  className="user-card"
  style={{
    border: "1px solid #cccccc",
    padding: "12px",
    margin: "10px",
    borderRadius: "8px",
    backgroundColor: user.active ? "#d1fed1" : "#fccece",
  }}
>
      <h3 style={{ color: "#1e293b" }}>
        {user.name}
      </h3>
      <p style={{ color: "#475569" }}>
          {user.email}
      </p>
      
      <p style={{ color: "#333" }}>
  Status:{" "}
  <strong style={{ color: user.active ? "green" : "red" }}>
    {user.active ? "Active" : "Inactive"}
  </strong>
</p>

      <button onClick={() => toggleStatus(user.id)}>
        Toggle
      </button>

      <button
        onClick={() => deleteUser(user.id)}
        style={{ marginLeft: "10px", backgroundColor: "red" }}
      >
        Delete
      </button>
    </div>
  );
}

export default UserCard;