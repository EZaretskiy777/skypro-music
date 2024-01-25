import { React, useEffect, useState } from "react";
import { AppRoutes } from "./routes";

function App() {
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem("user");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  return <AppRoutes loading={loading} user={user} />;
}

export default App;
