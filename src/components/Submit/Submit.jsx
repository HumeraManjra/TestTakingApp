import React from "react";

function Submit({ submitTest }) {
  return (
    <article className="flex-center container-center">
      <div className="finalResult-wrapper flex-center">
        <h1>You have reached end of Test</h1>
        <button onClick={submitTest}>Submit Test</button>
      </div>
    </article>
  );
}

export default Submit;
