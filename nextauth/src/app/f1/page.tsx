import React from "react";
import Link from "next/link";

const F1 = () => {
  return (
    <div>
      <h1>This is F1 page</h1>
      <Link href={"/f1/f2"}>f2</Link>
      <Link href={"/f3"}>f3</Link>
    </div>
  );
};

export default F1;
