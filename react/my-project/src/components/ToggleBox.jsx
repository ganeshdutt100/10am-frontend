import React, { useState } from "react";

function ToggleBox() {
  // isLit starts as false (off)
  const [isLit, setIsLit] = useState(false);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {/* Changes background and text based on boolean state */}
      <div
        style={{
          padding: "20px",
          backgroundColor: isLit ? "#ffeb3b" : "#333",
          color: isLit ? "#000" : "#fff",
          borderRadius: "8px",
          marginBottom: "15px",
        }}
      >
        The box is {isLit ? "ON 💡" : "OFF 🌙"}
      </div>

      {/* Flips the boolean value using the NOT operator (!) */}
      <button onClick={() => setIsLit(!isLit)}>Toggle Light</button>
    </div>
  );
}

export default ToggleBox;
