import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [records, setRecords] = useState([
    {
      id: 1,
      patient: "Maria Santos",
      doctor: "Dr. Cruz",
      procedure: "Root Canal",
      billing: 8500,
      status: "Paid",
    },
    {
      id: 2,
      patient: "John Reyes",
      doctor: "Dr. Garcia",
      procedure: "Tooth Extraction",
      billing: 3500,
      status: "Pending",
    },
  ]);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    procedure: "",
    billing: "",
    status: "Pending",
  });

  const login = () => {
    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  };

  const addRecord = () => {
    if (
      !form.patient ||
      !form.doctor ||
      !form.procedure ||
      !form.billing
    ) {
      alert("Complete all fields");
      return;
    }

    setRecords([
      ...records,
      {
        id: records.length + 1,
        ...form,
        billing: Number(form.billing),
      },
    ]);

    setForm({
      patient: "",
      doctor: "",
      procedure: "",
      billing: "",
      status: "Pending",
    });
  };

  if (!loggedIn) {
    return (
      <div style={styles.loginPage}>
        <div style={styles.loginCard}>
          <div style={styles.logo}>🦷</div>

          <h1 style={styles.title}>Dental Clinic System</h1>

          <p style={styles.subtitle}>
            Secure Patient Record Management
          </p>

          <input
            style={styles.input}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button style={styles.button} onClick={login}>
            Login
          </button>

          <p style={styles.demo}>
            Demo: admin / 1234
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.sidebar}>
        <h2 style={{ color: "white" }}>🦷 DentalSys</h2>

        <div style={styles.menu}>
          <p>Dashboard</p>
          <p>Patients</p>
          <p>Billing</p>
          <p>Procedures</p>
        </div>

        <button
          style={styles.logout}
          onClick={() => setLoggedIn(false)}
        >
          Logout
        </button>
      </div>

      <div style={styles.content}>
        <div style={styles.header}>
          <div>
            <h1>Dental Dashboard</h1>
            <p style={{ color: "#64748b" }}>
              Manage clinic records professionally
            </p>
          </div>
        </div>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Total Patients</h3>
            <h1>{records.length}</h1>
          </div>

          <div style={styles.card}>
            <h3>Total Revenue</h3>
            <h1>
              ₱
              {records
                .reduce((sum, item) => sum + item.billing, 0)
                .toLocaleString()}
            </h1>
          </div>

          <div style={styles.card}>
            <h3>Pending Payments</h3>
            <h1>
              {
                records.filter(
                  (item) => item.status === "Pending"
                ).length
              }
            </h1>
          </div>
        </div>

        <div style={styles.formCard}>
          <h2>Add Patient Record</h2>

          <div style={styles.formGrid}>
            <input
              style={styles.input}
              placeholder="Patient Name"
              value={form.patient}
              onChange={(e) =>
                setForm({ ...form, patient: e.target.value })
              }
            />

            <input
              style={styles.input}
              placeholder="Doctor Name"
              value={form.doctor}
              onChange={(e) =>
                setForm({ ...form, doctor: e.target.value })
              }
            />

            <input
              style={styles.input}
              placeholder="Procedure"
              value={form.procedure}
              onChange={(e) =>
                setForm({ ...form, procedure: e.target.value })
              }
            />

            <input
              style={styles.input}
              type="number"
              placeholder="Billing"
              value={form.billing}
              onChange={(e) =>
                setForm({ ...form, billing: e.target.value })
              }
            />
          </div>

          <button style={styles.button} onClick={addRecord}>
            Add Record
          </button>
        </div>

        <div style={styles.tableCard}>
          <h2>Patient Records</h2>

          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Patient</th>
                <th style={styles.th}>Doctor</th>
                <th style={styles.th}>Procedure</th>
                <th style={styles.th}>Billing</th>
                <th style={styles.th}>Status</th>
              </tr>
            </thead>

            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td style={styles.td}>{record.patient}</td>
                  <td style={styles.td}>{record.doctor}</td>
                  <td style={styles.td}>{record.procedure}</td>
                  <td style={styles.td}>
                    ₱{record.billing.toLocaleString()}
                  </td>

                  <td style={styles.td}>
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        background:
                          record.status === "Paid"
                            ? "#dcfce7"
                            : "#fef3c7",
                        color:
                          record.status === "Paid"
                            ? "#166534"
                            : "#92400e",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    background: "#f1f5f9",
    fontFamily: "Arial",
  },

  sidebar: {
    width: "240px",
    background: "#0f172a",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  menu: {
    color: "#cbd5e1",
    lineHeight: "40px",
    marginTop: "40px",
  },

  logout: {
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#ef4444",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  content: {
    flex: 1,
    padding: "30px",
  },

  header: {
    marginBottom: "30px",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "18px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },

  formCard: {
    background: "white",
    padding: "25px",
    borderRadius: "18px",
    marginBottom: "30px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },

  tableCard: {
    background: "white",
    padding: "25px",
    borderRadius: "18px",
    overflowX: "auto",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "15px",
    marginBottom: "20px",
  },

  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    width: "100%",
    boxSizing: "border-box",
  },

  button: {
    padding: "14px 20px",
    background: "#2563eb",
    border: "none",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },

  th: {
    textAlign: "left",
    padding: "14px",
    background: "#e2e8f0",
  },

  td: {
    padding: "14px",
    borderBottom: "1px solid #e2e8f0",
  },

  loginPage: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e2e8f0",
  },

  loginCard: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },

  logo: {
    fontSize: "60px",
    textAlign: "center",
  },

  title: {
    textAlign: "center",
    marginTop: "10px",
  },

  subtitle: {
    textAlign: "center",
    color: "#64748b",
    marginBottom: "30px",
  },

  demo: {
    marginTop: "20px",
    textAlign: "center",
    color: "#64748b",
  },
};