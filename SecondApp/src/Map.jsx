
function Map() {
  const fruits = ["Apple", "Banana", "Cherry", "Pineapple", "Watermalon"];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-green-800">
        Map Function In React
      </h1>

      <ul className="mt-10 text-xl br-rd-2px text-white bg-green-600 p-5">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Map;
