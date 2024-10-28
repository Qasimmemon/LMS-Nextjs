"use client"

import { useState } from "react";

export default function Course() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFiltered, setShowFiltered] = useState(false);

  const courses = [
    {
      name: "Web & App Development",
      description: "This Course to Learn Web & Mobile App Development.",
      duration: "1.5 Years",
      price: "5000 PKR",
    },
    {
      name: "Application Development",
      description: "This Course to Learn Application Development",
      duration: "6 Months",
      price: "5000 PKR",
    },
    {
      name: "Programming Language",
      description: "This Course to Learn Multiple Programming Languages.",
      duration: "4 Months",
      price: "5000 PKR",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative overflow-x-auto">
      <div className="flex items-center justify-between p-4">
        <input
          type="text"
          placeholder="Search by course name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded"
        />
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={showFiltered}
            onChange={() => setShowFiltered(!showFiltered)}
            className="mr-2"
          />
          Show only matching courses
        </label>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Course name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Duration
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {(showFiltered ? filteredCourses : courses).map((course, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {course.name}
              </th>
              <td className="px-6 py-4">{course.description}</td>
              <td className="px-6 py-4">{course.duration}</td>
              <td className="px-6 py-4">{course.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
