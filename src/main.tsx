import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import QRCode from "./QRCode";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QRCode />
  </StrictMode>,
);
