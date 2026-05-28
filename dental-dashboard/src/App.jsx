export default function DentalRecordsDashboard() {
  const patients = [
    {
      id: 1,
      name: "Maria Santos",
      age: 29,
      treatment: "Root Canal",
      appointment: "2026-05-28",
      status: "Ongoing",
    },
    {
      id: 2,
      name: "John Reyes",
      age: 34,
      treatment: "Teeth Cleaning",
      appointment: "2026-05-30",
      status: "Completed",
    },
    {
      id: 3,
      name: "Angela Cruz",
      age: 22,
      treatment: "Braces Consultation",
      appointment: "2026-06-02",
      status: "Scheduled",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Login Panel */}
        <div className="bg-white rounded-3xl shadow-xl p-6 lg:col-span-1">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              D
            </div>

            <h1 className="text-2xl font-bold mt-4">DentalCare</h1>
            <p className="text-gray-500 text-sm">
              Clinic Management System
            </p>
          </div>

          <form className="space-y-4">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter username"
                className="w-full mt-1 px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                className="w-full mt-1 px-4 py-3 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-3 rounded-2xl font-semibold shadow-md"
            >
              Log In
            </button>
          </form>

          <div className="mt-8 border-t pt-4">
            <h2 className="font-semibold text-gray-800 mb-3">
              System Features
            </h2>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Patient dental records</li>
              <li>• Appointment tracking</li>
              <li>• Treatment history</li>
              <li>• Dashboard analytics</li>
              <li>• Secure login access</li>
            </ul>
          </div>
        </div>

        {/* Dashboard */}
        <div className="lg:col-span-3 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <p className="text-gray-500 text-sm">Total Patients</p>
              <h2 className="text-4xl font-bold mt-2">245</h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <p className="text-gray-500 text-sm">
                Appointments Today
              </p>
              <h2 className="text-4xl font-bold mt-2">18</h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <p className="text-gray-500 text-sm">
                Pending Treatments
              </p>
              <h2 className="text-4xl font-bold mt-2">7</h2>
            </div>

          </div>

          {/* Patient Records */}
          <div className="bg-white rounded-3xl shadow-xl p-6">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

              <div>
                <h2 className="text-2xl font-bold">
                  Patient Dental Records
                </h2>

                <p className="text-gray-500 text-sm">
                  Manage patient information and treatment history
                </p>
              </div>

              <button className="bg-green-500 hover:bg-green-600 transition text-white px-5 py-3 rounded-2xl font-medium">
                + Add Patient
              </button>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full border-collapse">

                <thead>
                  <tr className="bg-slate-100 text-left">
                    <th className="p-4 rounded-l-2xl">
                      Patient Name
                    </th>

                    <th className="p-4">Age</th>

                    <th className="p-4">Treatment</th>

                    <th className="p-4">Appointment</th>

                    <th className="p-4 rounded-r-2xl">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {patients.map((patient) => (
                    <tr
                      key={patient.id}
                      className="border-b hover:bg-slate-50 transition"
                    >
                      <td className="p-4 font-medium">
                        {patient.name}
                      </td>

                      <td className="p-4">{patient.age}</td>

                      <td className="p-4">
                        {patient.treatment}
                      </td>

                      <td className="p-4">
                        {patient.appointment}
                      </td>

                      <td className="p-4">

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            patient.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : patient.status === "Ongoing"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {patient.status}
                        </span>

                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-white rounded-3xl shadow-xl p-6">

            <h2 className="text-2xl font-bold mb-4">
              Recent Activities
            </h2>

            <div className="space-y-4">

              <div className="flex items-center justify-between bg-slate-50 rounded-2xl p-4">
                <div>
                  <p className="font-medium">
                    Patient record updated
                  </p>

                  <p className="text-sm text-gray-500">
                    Maria Santos - Root Canal
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  10 mins ago
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-50 rounded-2xl p-4">
                <div>
                  <p className="font-medium">
                    New appointment booked
                  </p>

                  <p className="text-sm text-gray-500">
                    Angela Cruz - Consultation
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  25 mins ago
                </span>
              </div>

              <div className="flex items-center justify-between bg-slate-50 rounded-2xl p-4">
                <div>
                  <p className="font-medium">
                    Treatment completed
                  </p>

                  <p className="text-sm text-gray-500">
                    John Reyes - Cleaning
                  </p>
                </div>

                <span className="text-sm text-gray-400">
                  1 hour ago
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}