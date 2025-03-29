import { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null); // Store user data for editing
  const [page, setPage] = useState(1);
  // Fetch user list
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Handle delete
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    setUsers(users.filter((user) => user.id !== id)); // Update UI immediately

    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then(() => console.log(`User ${id} deleted`))
      .catch((error) => console.error("Error deleting user:", error));
  };

  // Handle edit button click
  const handleEditClick = (user) => {
    setEditUser(user); // Set user to edit mode
  };

  useEffect(() => {
    axios.get(`https://reqres.in/api/users?page=${page}`).then((response) => {
      setUsers(response.data.data);
    });
  }, [page]);

  // Handle form submission for updating user
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`https://reqres.in/api/users/${editUser.id}`, editUser);
      alert("User updated successfully!");

      // Update UI
      setUsers(
        users.map((user) => (user.id === editUser.id ? editUser : user))
      );
      setEditUser(null); // Exit edit mode
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-center mb-4">User List</h2>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">PHOTO</th>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border justify-center">
              <td className="justify-center">
                <img
                  src={user.avatar}
                  alt={user.first_name}
                  className="w-16 h-16 justify-center mx-5 rounded-full border-2 border-gray-300 shadow-md"
                />
              </td>

              <td className="p-2 border">{user.id}</td>
              <td className="p-2 border">
                {user.first_name} {user.last_name}
              </td>
              <td className="p-2 border">{user.email}</td>
              <div className="justify-center  mt-4">
                <button
                  onClick={() => handleEditClick(user)}
                  className="bg-blue-500 text-white px-5 py-1 mx-4 rounded hover:bg-blue-700 transition transform hover:scale-110 duration-300 ease-in-out"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition transform hover:scale-110 duration-300 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg mx-2 disabled:opacity-50  transform hover:scale-110 duration-300 ease-in-out"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-2 hover:bg-blue-600  transform hover:scale-110 duration-300 ease-in-out"
        >
          Next
        </button>
      </div>

      {editUser && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <form onSubmit={handleUpdate}>
              <label className="flex mb-2">First Name:</label>
              <input
                type="text"
                value={editUser.first_name}
                onChange={(e) =>
                  setEditUser({ ...editUser, first_name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />

              <label className="flex mt-3 mb-2">Last Name:</label>
              <input
                type="text"
                value={editUser.last_name}
                onChange={(e) =>
                  setEditUser({ ...editUser, last_name: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />

              <label className="flex mt-3 mb-2">Email:</label>
              <input
                type="email"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded"
                required
              />

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={() => setEditUser(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
