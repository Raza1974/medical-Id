"use client"; // Mark this component as a Client Component

import { useState } from 'react';

export default function DataEntryTable() {
  const [rows, setRows] = useState([
    {
      id: 1,
      billDate: '',
      receiveDate: '',
      timeBarred: '',
      name: '',
      designation: '',
      bps: '',
      department: '',
      relation: '',
      diseases: '',
      demand: '',
      mayApproved: '',
      remarks: ''
    }
  ]);

  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false); // State to check authorization

  function addRow() {
    const newRow = {
      id: rows.length + 1,
      billDate: '',
      receiveDate: '',
      timeBarred: '',
      name: '',
      designation: '',
      bps: '',
      department: '',
      relation: '',
      diseases: '',
      demand: '',
      mayApproved: '',
      remarks: ''
    };
    setRows([...rows, newRow]); // Update state with new row
  }

  function handleInputChange(id, field, value) {
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        const updatedRow = { ...row, [field]: value };

        // Add validation for BPS input
        if (field === 'bps') {
          const bpsValue = parseInt(value, 10);
          if (bpsValue < 1 || bpsValue > 22) {
            alert("BPS must be between 1 and 22");
            return row; // Return unchanged row if validation fails
          }
        }

        // Calculate Time Barred
        if (field === 'billDate' || field === 'receiveDate') {
          const billDate = new Date(updatedRow.billDate);
          const receiveDate = new Date(updatedRow.receiveDate);
          if (!isNaN(billDate.getTime()) && !isNaN(receiveDate.getTime())) {
            const timeDiff = receiveDate - billDate;
            const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
            updatedRow.timeBarred = daysDiff > 365 * 3 ? 'Yes' : 'No';
          }
        }
        return updatedRow; // Return updated row
      }
      return row; // Return unchanged row
    });
    setRows(updatedRows); // Update state with modified rows
  }

  const removeRow = (id) => {
    const updatedRows = rows.filter(row => row.id !== id);
    setRows(updatedRows); // Update state by removing row
  };

  const printSheet = () => {
    window.print();
  };

  const exportToCSV = () => {
    const isValid = rows.every(row => row.name && row.billDate); // Check required fields
    if (!isValid) {
      alert('Please fill in all required fields before exporting.');
      return;
    }

    let csv = 'Sr.NO.,Date of bill,Date of receiving,Time Barred,Name,Designation,BPS,Department,Relation,Diseases,Demand,May Approved\n';
    rows.forEach(row => {
      csv += `${row.id},${row.billDate},${row.receiveDate},${row.timeBarred},${row.name},${row.designation},${row.bps},${row.department},${row.relation},${row.diseases},${row.demand},${row.mayApproved}\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'data_entry_sheet.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Handle password submission
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'r1857') {
      setIsAuthorized(true); // Set authorization to true
    } else {
      alert('Incorrect password!');
    }
    setPassword(''); // Clear password field
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <header className="p-1 text-white bg-blue-600">
        <div className="container flex items-center justify-between mx-auto"></div>
      </header>
      <h1 className="text-xl font-bold">Data Entry Sheet</h1>

      <main className="container flex-grow px-4 mx-auto my-8">
        <style jsx>{`
          @media print {
            @page {
              size: landscape; /* Set print to landscape */
              margin: 20mm; /* Set margin for print */
            }
            body {
              -webkit-print-color-adjust: exact; /* Preserve colors */
              print-color-adjust: exact; /* Preserve colors */
            }
            table {
              width: 100%; /* Ensure the table takes the full width */
              border-collapse: collapse; /* Collapse borders for the print view */
            }
          }
        `}</style>

        {!isAuthorized ? (
          <form onSubmit={handlePasswordSubmit} className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="p-2 border rounded"
              required
            />
            <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full border border-collapse border-gray-300 table-auto">
                <thead>
                  <tr>
                    <th className="p-2 border border-gray-300">Sr.NO.</th>
                    <th className="p-2 border border-gray-300">Date of bill</th>
                    <th className="p-2 border border-gray-300">Date of receiving</th>
                    <th className="p-2 border border-gray-300">Time Barred</th>
                    <th className="p-2 border border-gray-300">Name</th>
                    <th className="p-2 border border-gray-300">Designation</th>
                    <th className="p-2 border border-gray-300">BPS</th>
                    <th className="p-2 border border-gray-300">Department</th>
                    <th className="p-2 border border-gray-300">Relation</th>
                    <th className="p-2 border border-gray-300">Diseases</th>
                    <th className="p-2 border border-gray-300">Demand</th>
                    <th className="p-2 border border-gray-300">May Approved</th>
                    <th className="p-2 border border-gray-300">Remarks</th>
                    <th className="p-2 border border-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.id}>
                      <td className="p-4 border border-gray-300">{row.id}</td>
                      <td className="p-1 border border-gray-300">
                        <input
                          type="date"
                          value={row.billDate}
                          onChange={(e) => handleInputChange(row.id, 'billDate', e.target.value)}
                          className="p-1 border w-full" // increase size of box
                        />
                      </td>
                      <td className="p-2 border border-gray-300">
                        <input
                          type="date"
                          value={row.receiveDate}
                          onChange={(e) => handleInputChange(row.id, 'receiveDate', e.target.value)}
                          className="p-1 border w-full" // increase size of box
                        />
                      </td>
                      <td className="p-2 border border-gray-300">{row.timeBarred}</td>
                      <td className="p-2 border border-gray-300">
                        <input
                          type="text"
                          value={row.name}
                          onChange={(e) => handleInputChange(row.id, 'name', e.target.value)}
                          className="p-1 border w-full" // increase size of box
                          required
                        />
                      </td>
                      <td className="p-2 border border-gray-300">
                        <input
                          type="text"
                          value={row.designation}
                          onChange={(e) => handleInputChange(row.id, 'designation', e.target.value)}
                          className="p-1 border w-full" // increase size of box
                        />
                      </td>
                      <td className="p-2 border border-gray-300">
                        <input
                          type="number"
                          value={row.bps}
                          onChange={(e) => handleInputChange(row.id, 'bps', e.target.value)}
                          min="1"
                          max="22"
                          className="p-1 border w-11" // increase size of box
                        />
                      </td>
                      <td className="p-2 border border-gray-300">
                        <input
                          type="text"
                          value={row.department}
                          onChange={(e) => handleInputChange(row.id, 'department', e.target.value)}
                          className="p-1 border w-full"
                        />
                      </td>
                      <td className="p-2 border border-gray-300">
                        <input
                          type="text"
                          value={row.relation}
                          onChange={(e) => handleInputChange(row.id, 'relation', e.target.value)}
                          className="p-1 border w-full"
                        />
                      </td>
                      <td className="p-2 border border-gray-300">
                        <input
                          type="text"
                          value={row.diseases}
                          onChange={(e) => handleInputChange(row.id, 'diseases', e.target.value)}
                          className="p-1 border w-full"
                        />
                      </td>
                      <td className="p-2 border border-gray-300">
                        <input
                          type="text"
                          value={row.demand}
                          onChange={(e) => handleInputChange(row.id, 'demand', e.target.value)}
                          className="p-1 border w-full"
                        />
                      </td>
                      <td className="p-2 border border-gray-300">
                        <input
                          type="text"
                          value={row.mayApproved}
                          onChange={(e) => handleInputChange(row.id, 'mayApproved', e.target.value)}
                          className="p-1 border w-full"
                        />
                      </td>
                      <td className="p-2 border border-gray-300">
                        <input
                          type="text"
                          value={row.remarks}
                          onChange={(e) => handleInputChange(row.id, 'remarks', e.target.value)}
                          className="p-1 border w-full"
                        />
                      </td>
                      <td className="p-2 border border-gray-300">
                        <button
                          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                          onClick={() => removeRow(row.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={addRow}
              >
                Add Row
              </button>
              <button
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                onClick={printSheet}
              >
                Print Sheet
              </button>
              <button
                className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
                onClick={exportToCSV}
              >
                Export to CSV
              </button>
            </div>
          </>
        )}
      </main>

      <footer className="p-4 text-center text-white bg-blue-600">
        © 2024 Your Company Name. All rights reserved.
      </footer>
    </div>
  );
}
