// components/Calculator/Calculator.jsx
import { useState } from "react";

export default function Calculator() {
  const [state, setState] = useState({
    result: 0,
    x: 0,
    y: 0,
  });

  function add() {
    console.log("x + y");
    // 상태 업데이트 로직
    setState((prev) => ({ ...prev, result: prev.x + prev.y }));
  }

  function subtract() {
    console.log("x - y");
    // 상태 업데이트 로직
    setState((prev) => ({ ...prev, result: prev.x - prev.y }));
  }

  function multiply() {
    console.log("x * y");
    // 상태 업데이트 로직
    setState((prev) => ({ ...prev, result: prev.x * prev.y }));
  }

  function divide() {
    console.log("x / y");
    // 상태 업데이트 로직
    setState((prev) => ({ ...prev, result: prev.x / prev.y }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    const finalValue = Number(value);
    console.log("name:", name, "value:", value, "finalValue:", finalValue);

    setState((prev) => ({ ...prev, [name]: finalValue }));
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">
        결과 값 : {state.result}
      </h2>
      <div>
        <input
          type="number"
          name="x"
          className="w-full p-2 mb-3 border"
          placeholder="x"
          value={state.x}
          onChange={handleChange}
        />
        <input
          type="number"
          name="y"
          className="w-full p-2 mb-3 border"
          placeholder="y"
          value={state.y}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-4">
        <button
          onClick={add}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          더하기 +
        </button>
        <button
          onClick={subtract}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          빼기 -
        </button>
        <button
          onClick={multiply}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          곱하기 *
        </button>
        <button
          onClick={divide}
          className="bg-blue-500 text-white px-6 py-2 cursor-pointer"
        >
          나누기 /
        </button>
      </div>
    </div>
  );
}
