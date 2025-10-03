"use client";

import supabase from "./supabaseClient";
import { useEffect, useState } from "react";

//require("dotenv").config();

type Row = {
  name: string;
  email: string;
  title: string;
};

export default function Home() {
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("all").select();
      if (!error && data) setRows(data as Row[]);
      if (error) console.log("Error fetching data:", error);
      if (data) console.log("Data fetched successfully:", data);
    }
    fetchData();
  }, []);

  console.log(rows);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        🚀 Welcome to My First Next.js + Tailwind Page!
      </h1>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Click Me!
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-none border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-16 border-b border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="py-2 px-40 border-b border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="py-2 px-16 border-b border-gray-300 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.title}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
