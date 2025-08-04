import React from "react";
import ReactDOM from "react-dom/client";
import { ModeProvider } from "./use_context_hook/modeContext";
import Mode from "./use_context_hook/Mode";
import Count from "./useref/useref_count_color";
import Stopwatch from "./useref/stopwatch";
import Counter from "./usememo/usememo";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <ModeProvider>
  //   <Mode />
  // </ModeProvider>
  // <Count />
  // <Stopwatch />
  <Counter />
);
