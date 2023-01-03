import App from "./App";
import { createRoot } from "react-dom/client";

const appDom = document.getElementById("app");

if (appDom) {
  createRoot(appDom).render(<App></App>);
}
