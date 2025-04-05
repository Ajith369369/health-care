import React from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import UserData from "../../components/admin/UserData";
import { useUsers } from "../../hooks/useUsers";

const UserListing: React.FC = () => {
  const { users } = useUsers();

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-6 py-3 text-left">Serial No</th>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => {
                    return <UserData {...user} index={index} key={user._id} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserListing;
