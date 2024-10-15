import Link from "next/link";

export default function Home() {
  const employees = [
    { name: "John Doe", link: "/employees/john" },
    { name: "Jane Smith", link: "/employees/jane" },
    { name: "Ali Khan", link: "/employees/ali" },
  ];

  const dispensaries = [
    { name: "Central Dispensary", link: "/dispensaries/central" },
    { name: "Westside Dispensary", link: "/dispensaries/westside" },
    { name: "Downtown Dispensary", link: "/dispensaries/downtown" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      <div>
        <img
          src="/image/about us.jpg"
          alt="About"
          className="w-1/6 h-auto mx-auto"
        />
        <h1 className="text-2xl font-bold text-center">
          About Us <hr />
        </h1>
        <p className="text-lg mt-4 text-center">
          Welcome to our Medical Branch. Here you can find our dedicated employees and dispensaries that serve our community.
        </p>
      </div>
      
      <div className="flex flex-col space-y-4 mx-4">
        <h2 className="text-xl font-semibold">Employees</h2>
        <ul className="list-disc pl-5">
          {employees.map((employee, index) => (
            <li key={index} className="text-lg">
              <Link href={employee.link}>
                <button className="text-blue-500 underline">
                  Employee {index + 1}
                </button>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-4">Dispensaries</h2>
        <ul className="space-y-2">
          {dispensaries.map((dispensary, index) => (
            <li key={index}>
              <Link href={dispensary.link} className="text-lg text-blue-500 underline">
                {dispensary.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
