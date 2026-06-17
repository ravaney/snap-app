import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./app/router/AppRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
