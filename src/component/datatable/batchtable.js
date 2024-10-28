"use client"

import { useState } from "react";

export default function CourseBatchStatusTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      courseName: "Web & App Development",
      status: "Pending",
      batchName: "Batch 1",
      trainer: "John Doe",
      noOfStudents: 25,
    },
    {
      courseName: "Application Development",
      status: "Completed",
      batchName: "Batch 2",
      trainer: "Jane Smith",
      noOfStudents: 30,
    },
    {
      courseName: "Programming Languages",
      status: "Pending",
      batchName: "Batch 3",
      trainer: "Alice Johnson",
      noOfStudents: 20,
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.batchName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search by Course or Batch Name..."
        className="mb-4 p-2 border border-gray-300 rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Course Name</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Batch Name</th>
              <th className="px-6 py-3">Trainer</th>
              <th className="px-6 py-3">No of Students</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.courseName}
                </th>
                <td className="px-6 py-4">{item.status}</td>
                <td className="px-6 py-4">{item.batchName}</td>
                <td className="px-6 py-4">{item.trainer}</td>
                <td className="px-6 py-4">{item.noOfStudents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
