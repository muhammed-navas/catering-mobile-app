import React from "react";

function Users() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Users</h3>
      <ul className="divide-y divide-gray-200">
        {users.map((user) => (
          <li key={user.id} className="py-4">
            <div className="flex justify-between">
              <span className="font-medium">{user.name}</span>
              <span className="text-gray-500">{user.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
