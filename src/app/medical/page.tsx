
import DataEntryTable from "../components/DataEntryTable"; // Replace with the correct path to the DataEntryTable component

export default function Medical() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div className="flex flex-row justify-between items-center">
           
            <p> Office Superintendent </p>
      <h1> Town Municipal Corporation Gadap  District Malir Karachi  </h1> 
    </div>  
      {/* Main Content - Data Entry Table */}
      <main className="flex-grow">
        <DataEntryTable />
        
      </main>

     
    </div>
  );
}
