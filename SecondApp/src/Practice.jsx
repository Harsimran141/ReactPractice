import { useState } from "react";

const Practice = () => {
  const [name, setName] = useState(false);

  if (name) {
    return (
      <div>
        <button
          className="bg-red-500 p-4 text-white"
          onClick={() => setName(!name)}
        >
          Hide
        </button>

        <p>Welcome React</p>
      </div>
    );
  } else {
    return (
      <div>
        <button
          className="bg-blue-500 p-4 text-white"
          onClick={() => setName(!name)}
        >
          Show
        </button>
      </div>
    );
  }
};

export default Practice;