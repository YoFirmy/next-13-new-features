"use client";

import { PropsWithChildren, ReactNode, useState } from "react";

interface CounterWithButtonProps {
  serverComponent: ReactNode;
}

// export default function CounterWithButton({
//   serverComponent,
// }: CounterWithButtonProps) {
export default function CounterWithButton({ children }: PropsWithChildren) {
  const [counter, setCounter] = useState(0);

  console.log(`I'm inside a client component!`);

  return (
    <div className="flex flex-col gap-2 mt-5">
      <p className="m-auto">{counter}</p>
      <button
        className="border-2 border-black p-2"
        onClick={() => setCounter(counter + 1)}
      >
        increase counter
      </button>
      <button
        className="border-2 border-black p-2"
        onClick={() => setCounter(counter - 1)}
      >
        decrease counter
      </button>
      {children}
      {/* {serverComponent} */}
    </div>
  );
}
