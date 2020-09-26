// Reference
// - Konami Code Example: https://github.com/joelnet/konami-code-react-component/blob/main/src/App.js

// import { useState, useRef, useEffect } from "react";
import { useRound } from "../../hooks/useSockets";

const WSDebugger = (props) => {
  const round = useRound();
  return (
    <div>
      <pre>
        <code>{JSON.stringify(round, null, 2)}</code>
      </pre>
    </div>
  );
};

export default WSDebugger;
