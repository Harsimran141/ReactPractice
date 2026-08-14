import { useEffect } from "react";

function Counteruse() {

  useEffect(() => {

    const timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer stopped");
    };

  }, []);

  return <h1>Timer Component</h1>;
}

export default Counteruse;