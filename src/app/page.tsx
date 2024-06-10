import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(1);

  const count = 1;
  return (
    <div>
      <span className={`${count >= 1 ? "text-blue-900" : ""}`}>1</span>
      <span className={`${count >= 2 ? "text-red-600" : ""}`}>2</span>
      <span className={`${count >= 3 ? "text-purple-600" : ""}`}>3</span>

      <button>Previous</button>
      <button>Next</button>
    </div>
  );
}
