import { Routes, Route, Navigate } from "react-router-dom";
import { RoleSelection } from "@/components/RoleSelection";
import { AuthorityDashboard } from "@/components/AuthorityDashboard";
import { CivilDashboard } from "@/components/CivilDashboard";
import { NotFound } from "@/pages/NotFound";

export function Index() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelection />} />
      <Route path="/dashboard/authority" element={<AuthorityDashboard />} />
      <Route path="/dashboard/civil" element={<CivilDashboard />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}

