import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../../features/wallet/HomePage";
import { Login } from "../../features/auth/pages/Login";
import { ActivityPage } from "../../features/transactions/ActivityPage";
import { ProfilePage } from "../../features/profile/ProfilePage";
import { MainAppLayout } from "../layouts/MainAppLayout";
import { SendMoney } from "../../features/transfers/SendMoney";
import { Signup } from "../../features/auth/pages/Signup";
import { WelcomePage } from "../../features/auth/pages/WelcomePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<MainAppLayout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/activity" element={<ActivityPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/send" element={<SendMoney />} />
      </Route>
    </Routes>
  );
}
