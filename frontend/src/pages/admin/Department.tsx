import React from "react";
import Department from "../../components/admin/Department";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";

const DepartmentPage: React.FC = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="p-6">
            <Department />
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentPage;
