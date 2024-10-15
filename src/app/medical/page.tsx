
import DataEntryTable from "../components/DataEntryTable"; // Replace with the correct path to the DataEntryTable component

export default function Medical() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
     
      {/* Main Content - Data Entry Table */}
      <main className="flex-grow">
        <DataEntryTable />
      </main>

     
    </div>
  );
}
