
import DataEntryTable from "@/app/component/DataEntryTable";

export default function Medical() {
  return (
    <div className="flex flex-col min-h-screen">
     
      {/* Main Content - Data Entry Table */}
      <main className="flex-grow">
        <DataEntryTable />
      </main>

     
    </div>
  );
}
