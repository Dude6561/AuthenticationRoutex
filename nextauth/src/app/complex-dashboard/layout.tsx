import React, { Children } from "react";
import Notification from "./@notification/page";
import Analytics from "./@analytics/page";
import Users from "./@user/page";

const layout = ({
  children,
  user,
  notification,
  analytics,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  notification: React.ReactNode;
  analytics: React.ReactNode;
}) => {
  return (
    <>
      <div>{children}</div>
      <div>
        <div>
          <div>{user}</div>
          <div>{notification}</div>
        </div>
        <div>{notification}</div>
      </div>
    </>
  );
};

export default layout;
