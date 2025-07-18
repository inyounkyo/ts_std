import React from "react";

const Myfuntions = () => {
  function addTwo(num: number): number {
    return num + 2;
  }
  //let addTwo1 = addTwo(4);
  type MyValType = boolean | string;
  const getValue = (myVal: number): MyValType => {
    if (myVal > 5) {
      return true;
    }
    return "200 OK";
  };
  //console.log(getValue(100));
  //
  const heros = ["thor", "spierman", "ironman"];
  const h = heros.map((i): string => {
    return i;
  });
  //console.log(h);
  /* myObjects.ts start */
  const User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true,
  };
  function createUser(xx: { name: string; isPaid: boolean }) {
    //console.log("%o", xx);
  }
  createUser({ name: "kknd", isPaid: true });
  type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetail?: number;
  };
  let myUser: User = {
    _id: "1234",
    name: "h",
    email: "h@navigator.com",
    isActive: false,
  };
  myUser.email = "inyounkyo@hanmail.net";
  myUser.credcardDetail = 12345;

  function createUser01(user: User): User {
    return user;
  }
  //console.log("%o", createUser01(myUser));
  type cardNumber = {
    cardnumber: string;
  };
  type cardDate = {
    cardDate: string;
  };
  type cardDetails = cardNumber &
    cardDate & {
      cvv?: Number;
    };
  let card001: cardDetails = {
    cardnumber: "1234",
    cardDate: "2004-04-21",
  };
  /* myObjects.ts end */
  /* myArray.ts start */
  type User001 = {
    name: string;
    isActive: boolean;
  };
  let superHeros: string[] = [];
  const heroPower: Array<number> = [];
  let s: string[];
  superHeros = ["aaa", "bbbb"];
  let superMan: User001[] = [];
  superMan.push({ name: "kknd", isActive: true });
  /* myArray.ts end */
  type User002 = {
    name: string;
    id: number;
  };
  type Admin = {
    userName: string;
    id: number;
  };
  let myUnHitesh: User002 | Admin = { name: "kknd", id: 3333, userName: "ddd" };
  /* myUnion.ts start */
  /* myUnion.ts end */
  /* myTupEnums.ts start */
  // const user003: string[] = ["hs", 1];
  const user003: (string | number)[] = ["hs", 1];
  let userTuple: [string, number, boolean];
  userTuple = ["ddd", 33, true];
  /* myTupEnums.ts end */
  interface User005 {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    startTrail(): string;
    getCoupon(couponName: string, value: number): [string, number];
  }
  interface User005 {
    githupToken: string;
  }
  interface Admin005 extends User005 {
    role: "admin" | "ta" | "learner";
  }

  const hitest005: Admin005 = {
    dbId: 22,
    email: "kknd@hanmail.net",
    userId: 333,
    role: "admin",
    githupToken: "githup",
    startTrail: () => {
      return "trail started";
    },
    getCoupon: (couponName, value) => {
      return [couponName, value];
    },
  };

  console.log(hitest005.getCoupon("input", 333));
  return <div>Myfuntionsss</div>;
};

export default Myfuntions;
