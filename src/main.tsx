import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./globals/providers/UserProvider.tsx";
import { initialUserValue } from "./globals/initialValues/userInitialValue.ts";
import MainRouter from "./routes/MainRouter.js";
//import '../index.css';
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider valorInicial={initialUserValue}>
      <MainRouter />
    </UserProvider>
  </StrictMode>,
);
