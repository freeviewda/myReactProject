import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*
import ㄹㄹㄹ from "react";
import ㄹㄷㄹㄷ from "react-dom/client";
import ㅇㅇㅇ from "./App";

const root = ㄹㄷㄹㄷ.createRoot(document.getElementById("root"));
root.render(
  <ㄹㄹㄹ.StrictMode>
    <ㅇㅇㅇ />
  </ㄹㄹㄹ.StrictMode>
);
*/