import React from "react";

const MoreonFunctions = () => {
  type DescribableFuntion = {
    description: string;
    (someArg: number): boolean;
  };

  function doSomething(fn: DescribableFuntion) {
    console.log(fn.description + " returned " + fn(6));
  }

  function myFunc(someArg: number) {
    return someArg > 3;
  }

  myFunc.description = "default description";
  doSomething(myFunc);

  ////
  function greeter(fn: (a: string) => void) {
    fn("Hello, Word");
  }
  function printToConsole(s: string) {
    console.log(s);
  }
  greeter(printToConsole);

  return <div>More on Functions!!</div>;
};

export default MoreonFunctions;
