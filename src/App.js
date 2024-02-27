import React from "react";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoute from "./components/PrivateRoutes/PrivateRoutes";
// import Transfer from "./Transfer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}
