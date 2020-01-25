import React from "react";
import "./App.scss";
import TreatiesModal from "./TreatiesModal/TreatiesModal";
import { Provider as TreatiesProvider } from "./context/TreatiesContext";

function App() {
  return (
    <TreatiesProvider>
      <TreatiesModal />
    </TreatiesProvider>
  );
}

export default App;
