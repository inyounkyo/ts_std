import React from "react";

interface Square {
  color: string;
  width: number;
}
//
interface ts_ab {
  a: string;
}
interface ts_ab {
  b: string;
}
//
type Point = {
  x: number;
  y: number;
};

function f_ts_ab(ab: ts_ab) {
  console.log(ab);
}
let ftab: ts_ab = { a: "aaaaa", b: "bbbb" };
f_ts_ab(ftab);

function printCoord(pt: Point) {
  console.log(pt.x, pt.y);
}
printCoord({ x: 10, y: 20 });
//
const welcomePeople = (x: string[] | string) => {
  // if (Array.isArray(x)) {
  //   console.log("Hello, " + x.join(" and "));
  // } else {
  //   console.log(x);
  // }
  return x.slice(0, 1);
};
console.log(welcomePeople("abcd"));
console.log(welcomePeople(["ddd", "aaaa", "cccc"]));

//Defining a Union Type
function printId(id: number | string) {
  console.log();
  console.log("Your ID is: " + id);
}
printId(22);
printId("aaa");
//printId({ id: 222 }); //error
//
const optionProperty = (obj: { first: string; last?: string }) => {
  console.log(obj);
  console.log(obj.last?.toUpperCase());
};
optionProperty({ first: "kknd" });
//optionProperty({ last: "lastvalue" }); //error
optionProperty({ first: "kknd", last: "aabccd" });

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
