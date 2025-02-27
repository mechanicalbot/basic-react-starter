import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <button
          className="px-4 py-2 border rounded hover:bg-gray-200"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}
