import React from "react";
import DataEntryTable from "../components/DataEntryTable"; // Adjust the import path if necessary

export default function Medical() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <header className="flex flex-row justify-between items-center p-4">
        <p>Office Superintendent</p>
        <h1 className="text-center">Town Municipal Corporation Gadap, District Malir Karachi</h1> 
      </header>
      
      {/* Main Content - Data Entry Table */}
      <main className="flex-grow">
        <DataEntryTable />
      </main>
    </div>
  );
}
