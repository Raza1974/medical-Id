import { useState } from "react";
import { useRouter } from "next/router";

export default function EmployeePage() {
  const router = useRouter();
  const { name } = router.query; // Get the employee name from the URL
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "r1857") {
      setAccessGranted(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      {accessGranted ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Employee Details</h1>
          <p className="mt-4">Welcome, {name}! Here are your details:</p>
          {/* You can add more employee-specific information here */}
          <p>Phone: +92 3001234567</p> {/* Replace with actual phone numbers */}
        </div>
      ) : (
        <form onSubmit={handlePasswordSubmit} className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">Enter Password</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-4 p-2 border rounded"
            placeholder="Password"
            required
          />
          <button type="submit" className="mt-4 p-2 bg-blue-600 text-white rounded">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
