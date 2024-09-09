import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ChakraTheme from "./themeChakra";
const tema = extendTheme(ChakraTheme);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={tema}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
