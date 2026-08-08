
import { useState } from "react";

function Label() {
  const [selected, setSelected] = useState({
    HTML: false,
    CSS: false,
    Javascript: false,
  });

  const htmlChecked = (e) => {
    setSelected({
      ...selected,
      HTML: e.target.checked,
    });
  };

  const cssChecked = (e) => {
    setSelected({
      ...selected,
      CSS: e.target.checked,
    });
  };

  const jsChecked = (e) => {
    setSelected({
      ...selected,
      Javascript: e.target.checked,
    });
  };

  const clearAll = () => {
    setSelected({
      HTML: false,
      CSS: false,
      Javascript: false,
    });
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold text-blue-500">
        Check Box
      </h1>

      <div className="mt-5 flex flex-col gap-3">

        <label>
          <input
            type="checkbox"
            checked={selected.HTML}
            onChange={htmlChecked}
          />
          {" "}HTML
        </label>

        <label>
          <input
            type="checkbox"
            checked={selected.CSS}
            onChange={cssChecked}
          />
          {" "}CSS
        </label>

        <label>
          <input
            type="checkbox"
            checked={selected.Javascript}
            onChange={jsChecked}
          />
          {" "}Javascript
        </label>

      </div>

      <h2 className="mt-5 text-xl font-bold">
        Selected:
      </h2>

      <ul>
        {selected.HTML && <li>HTML</li>}
        {selected.CSS && <li>CSS</li>}
        {selected.Javascript && <li>Javascript</li>}
      </ul>

      <button
        onClick={clearAll}
        className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
      >
        Clear
      </button>

    </div>
  );
}

export default Label;

