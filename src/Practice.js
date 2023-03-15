/** @format */

import React from "react";

export default function Practice() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  /**
   * Quiz:
   * 1. What will happen if I put back our Star Wars API call
   *    into the effect function?
   * 2. How will the useEffect be different if I use
   *    setStarWarsData() instead of console.log()
   */
  React.useEffect(
    function () {
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [count]
  );

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get Next Character
      </button>
    </div>
  );
}
