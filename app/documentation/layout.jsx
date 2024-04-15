import Sidebar from "../../components/Sidebar";

import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="mt-20 flex flex-row">
      <hr />

      <Sidebar />

      <div className="flex-grow">
        <main>
          <div className=" my-10 mx-10">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
