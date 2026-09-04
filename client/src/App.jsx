import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking API...");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.message);
      })
      .catch(() => {
        setStatus("API connection failed");
      });
  }, []);

  return (
    <main>
      <h1>Property AI</h1>
      <p>{status}</p>
    </main>
  );
}

export default App;