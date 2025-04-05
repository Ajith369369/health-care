import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { ADMIN_API } from "../../../Config";
import axiosJWT from "../../../services/axiosService";

const DonutChart: React.FC = () => {
  const [doctors, setDoctors] = useState<[]>([]);
  const [users, setUsers] = useState<[]>([]);
  const [appointments, setAppointments] = useState<[]>([]);
  const [chartData, setChartData] = useState({
    options: {
      labels: ["Doctors", "Users", "Appointments"],
    },
    series: [0, 0, 0],
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axiosJWT.get(`${ADMIN_API}/doctors`);
        console.log(response, "doctorsList");
        if (Array.isArray(response.data.doctors)) {
          setDoctors(response.data.doctors);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axiosJWT.get(`${ADMIN_API}/users`);
        console.log(response, "usersList");
        if (Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    const fetchAppointments = async () => {
      try {
        const response = await axiosJWT.get(`${ADMIN_API}/appointments`);
        console.log(response, "appointments");
        if (Array.isArray(response.data.appointments)) {
          setAppointments(response.data.appointments);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchDoctors();
    fetchUsers();
    fetchAppointments();
  }, []);

  useEffect(() => {
    setChartData({
      options: {
        labels: ["Doctors", "Users", "Appointments"],
      },
      series: [doctors.length, users.length, appointments.length],
    });
  }, [doctors, users]);

  return (
    <div className="flex justify-center items-center ml-6 shadow-lg rounded-lg p-4 bg-white mt-1">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default DonutChart;
