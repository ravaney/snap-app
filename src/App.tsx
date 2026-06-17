import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./app/router/AppRouter";
import UpdateNotification from "./components/UpdateNotification/UpdateNotification";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
      <UpdateNotification />
    </BrowserRouter>
  );
};
