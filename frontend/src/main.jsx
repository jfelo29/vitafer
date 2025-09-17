import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../vendor/index.css";
import App from "./app.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
 <StrictMode>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </StrictMode>
);