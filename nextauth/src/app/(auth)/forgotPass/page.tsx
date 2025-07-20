import React from "react";

const ForgotPass = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolves");
    }, 2000);
  });
  return (
    <div>
      <h1>This Is a Forgot Pass Page</h1>
    </div>
  );
};

export default ForgotPass;
