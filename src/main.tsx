import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const legalPaths = ["/aviso-legal", "/aviso-legal/"];
const privacyPaths = ["/politica-privacidad", "/politica-privacidad/"];
const cookiesPaths = [
  "/politica-cookies",
  "/politica-cookies/",
  "/politica-de-cookies",
  "/politica-de-cookies/"
];
const termsPaths = ["/condiciones-uso", "/condiciones-uso/"];
const contractingPaths = [
  "/condiciones-de-contratacion",
  "/condiciones-de-contratacion/",
  "/condiciones-contratacion",
  "/condiciones-contratacion/"
];

async function getCurrentPage() {
  const pathname = window.location.pathname;

  if (legalPaths.includes(pathname)) {
    const module = await import("./LegalPage");
    return module.default;
  }

  if (privacyPaths.includes(pathname)) {
    const module = await import("./PrivacyPage");
    return module.default;
  }

  if (cookiesPaths.includes(pathname)) {
    const module = await import("./CookiesPage");
    return module.default;
  }

  if (termsPaths.includes(pathname)) {
    const module = await import("./TermsPage");
    return module.default;
  }

  if (contractingPaths.includes(pathname)) {
    const module = await import("./ContractingPage");
    return module.default;
  }

  return App;
}

getCurrentPage().then((CurrentPage) => {
  createRoot(rootElement).render(
    <StrictMode>
      <CurrentPage />
    </StrictMode>
  );
}).catch(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
