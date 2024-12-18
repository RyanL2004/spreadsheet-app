import React, { useEffect } from "react";

const SpreadsheetApp = () => {
  useEffect(() => {
    // Load external JavaScript (similar to script.js) after the component mounts
    const script = document.createElement("script");
    script.src = "/script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

  return (
    <div>
      <h1>Spreadsheet Application</h1>
      <div id="container"></div>
    </div>
  );
};

export default SpreadsheetApp;
