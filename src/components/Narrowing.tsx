import React from "react";

const Narrowing = () => {
  //
  interface Circle {
    kind: "circle";
    radius: number;
  }
  interface Square {
    kind: "square";
    sideLength: number;
  }
  type Shape = Circle | Square;
  //   function getArea(shape: Shape) {
  //     return Math.PI * shape.radius ** 2;
  //   } error

  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
    }
  }
  let c: Circle = { kind: "circle", radius: 2 };
  console.log(getArea(c));
  console.log(getArea({ kind: "square", sideLength: 21 }));

  return <div>Narrowing</div>;
};

export default Narrowing;
