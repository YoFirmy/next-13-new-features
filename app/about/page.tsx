import CounterWithButton from "@/app/(components)/organisms/CounterWithButton";
import ExampleNestedSC from "@/app/(components)/atoms/ExampleNestedSC";

export default function AboutPage() {
  console.log("I'm inside a server component!");

  return (
    <>
      <h1>About</h1>
      <CounterWithButton>
        <ExampleNestedSC />
      </CounterWithButton>
      {/* <CounterWithButton serverComponent={<ExampleNestedSC />} /> */}
    </>
  );
}
