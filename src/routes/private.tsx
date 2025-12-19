import { Route } from "react-router-dom";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { Dashboard } from "@/components/pages/Dashboard";
import { BizCards } from "@/components/pages/BizCards";
import { CashFlow } from "@/components/pages/CashFlow";

export const privateRoutes = (
  <Route element={<AuthGuard />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/bizcards" element={<BizCards />} />
    <Route path="/cashflow" element={<CashFlow />} />
  </Route>
);
