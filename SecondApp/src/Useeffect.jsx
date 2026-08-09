import { useEffect, useState } from "react";

function Useeffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      
      <h1 className="text-center text-4xl font-bold text-blue-700 mb-10">
        UseEffect Hook In React
      </h1>

      <h2 className="text-center text-2xl font-semibold mb-8">
        User List
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-5">
        
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              {user.name}
            </h3>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span> {user.email}
            </p>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">City:</span>{" "}
              {user.address.city}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Useeffect;