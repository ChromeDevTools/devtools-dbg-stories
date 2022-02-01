import React from "react";
import { Counter } from "./features/counter/Counter";
import { Label } from "./features/label/Label";

const range = Array.from({ length: 10000 });

function App() {
  return (
    <>
      <Counter />
      <div>
        {range.map((_, i) => (
          <Label key={i} />
        ))}
      </div>
    </>
  );
}

export default App;
