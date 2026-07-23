import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./app/router/AppRouter";
import UpdateNotification from "./components/UpdateNotification/UpdateNotification";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const App = () => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <AppRouter />
          <UpdateNotification />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
