import React from "react";
import DoctorData from "../../components/admin/DoctorData";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";

const DoctorListing: React.FC = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Doctor List</h1>
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-6 py-3 text-left">Serial No</th>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Department</th>
                    <th className="px-6 py-3 text-left">Verified</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Details</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <DoctorData />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorListing;
