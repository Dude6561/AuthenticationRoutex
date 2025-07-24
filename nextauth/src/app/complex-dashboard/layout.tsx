"use client";
import React, { Children, useState } from "react";

const layout = ({
  children,
  user,
  notification,
  analytics,
  login,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  notification: React.ReactNode;
  analytics: React.ReactNode;
  login: React.ReactNode;
}) => {
  const [isLogin, setisLogin] = useState(false);
  return isLogin ? (
    <>
      <div>{children}</div>
      <div className=" space-y-10">
        <div>
          <div className=" w-[250px] h-16  border-1 shadow-2xl border-gray-600 ">
            {user}
          </div>
          <div className=" w-[250px] h-16  border-1 shadow-2xl border-gray-600 ">
            {notification}
          </div>
        </div>
        <div className=" w-[250px] h-16  border-1 shadow-2xl border-gray-600 ">
          {analytics}
          {login}
        </div>
      </div>
    </>
  ) : (
    <>
      <button
        onClick={() => {
          setisLogin(true);
        }}
      >
        Click to login
      </button>
    </>
  );
};

export default layout;
