import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Count from "./useref/useref_count_color.jsx";

import { ModeProvider } from "./use_context_hook/modeContext";
import Mode from "./use_context_hook/Mode.jsx";
import Stopwatch from "./useref/stopwatch.jsx";
import Counter from "./usememo/usememo.jsx";

createRoot(document.getElementById("root")).render(
  <>
    {/* <ModeProvider>
      <Mode />
    </ModeProvider> */}
    {/* <Count /> */}
    {/* <Stopwatch /> */}
    <Counter />
  </>
);
