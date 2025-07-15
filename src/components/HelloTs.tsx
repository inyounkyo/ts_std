import React from "react";

interface Square {
  color: string;
  width: number;
}

function FunParamObjTy(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

function Greet(name: string): string {
  return name;
}

const anno = () => {
  const names = ["Alice", "Bob", "Eve"];
  names.forEach(function (s) {
    console.log(s.toUpperCase());
  });
};

const HelloTs = () => {
  let s: Square = { color: "red", width: 100 };
  let g = Greet("#efeffff");
  anno();
  //paramter with Object type
  FunParamObjTy({ x: 10, y: 20 });

  return (
    <div>
      Hello Typescript !!!````{s.color}:{g}
    </div>
  );
};

export default HelloTs;
