import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./app/router/AppRouter";
import UpdateNotification from "./components/UpdateNotification/UpdateNotification";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouter />
        <UpdateNotification />
      </ThemeProvider>
    </BrowserRouter>
  );
};
