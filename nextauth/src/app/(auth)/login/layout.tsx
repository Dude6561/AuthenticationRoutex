import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <h2>This is layout</h2>
    </div>
  );
};

export default layout;
