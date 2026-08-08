import { useState } from "react";

function Radiobtn() {
  const [gender, setGender] = useState("");
  const [country,setCountry] = useState("")

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800">
        Radio Button and Select Dropdown
      </h1>

      <h2>Select Gender</h2>

      <label>
        <input
          type="radio"
          value="Male"
          name="gender"
          checked={gender === "male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          value="Female"
          name="gender"
          checked={gender === "female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <label>
        <input
          type="radio"
          value="Other"
          name="gender"
          checked={gender === "other"}
          onChange={(e) => setGender(e.target.value)}
        />
        Other
      </label>

      <p>
        Selected gender: <strong>{gender}</strong>
      </p>
      <h1 className="text-3xl font-bold">Select Dropdown country</h1>
      <select name="" id="" onChange={(e)=>setCountry(e.target.value)}>
        <option value="India">India</option>
        <option value="canada">Canada</option>
        <option value="Uk">Uk</option>
        <option value="Australia">Australia</option>
        <option value="Newzeland">Newzeland</option>
        <option value="Rasia">Rasia</option>
      </select>
      <h1>Selected Country : <span className="text-3xl font-bold text-green-500">
        {country}</span></h1>
    </div>
  );
}

export default Radiobtn;