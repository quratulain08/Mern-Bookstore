import React, { useContext, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { AuthContext } from "../context/AuthProvider";
import { Chart, registerables } from 'chart.js';

// Register required components
Chart.register(...registerables);

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Sales Data",
      font: {
        size: 20,
      },
    },
  },
};

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const chartRef = useRef(null);

  useEffect(() => {
    // Cleanup function to destroy chart instance
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen p-6 bg-gray-100">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Welcome, {user?.displayName || "User"}</h1>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Add New</button>
          <button className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600">Generate Report</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 gap-6 lg:flex-row">
        {/* Chart Section */}
        <div className="flex-1 p-4 bg-white shadow-lg">
          <div className="w-full h-80">
            <Line data={data} options={options} ref={chartRef} />
          </div>
        </div>

        {/* Summary Section */}
        <div className="flex flex-col flex-1 gap-6">
          <div className="p-4 bg-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">Sales Summary</h3>
            <p>Total Sales: $2,000</p>
            <p>New Orders: 30</p>
            <p>Returned Orders: 5</p>
          </div>

          <div className="p-4 bg-white shadow-lg">
            <h3 className="mb-2 text-xl font-semibold">User Engagement</h3>
            <p>Total Users: 150</p>
            <p>Active Users: 120</p>
            <p>New Sign-Ups: 10</p>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="mt-6">
        <div className="p-4 bg-white shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Role</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">1</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Qurat Ul Ain</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Active</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Admin</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">2</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Annie</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">Inactive</td>
                <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">User</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
