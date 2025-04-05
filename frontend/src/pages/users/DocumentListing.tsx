import React from "react";
import DoctorNavbar from "../../components/doctors/Navbar";
import DocumentList from "../../components/users/DocumentListing";
import UserNavbar from "../../components/users/Navbar";
import { useAppSelector } from "../../features/store/store";

const DocumentListing: React.FC = () => {
  const user = useAppSelector((state) => state.UserSlice);

  return (
    <>
      {user.role === "user" ? <UserNavbar /> : <DoctorNavbar />}
      <DocumentList />
    </>
  );
};

export default DocumentListing;
