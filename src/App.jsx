import { useState } from "react";
import "./App.css";
import Component1 from "./components/component1";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <UserProvider>
      <Component1 />
    </UserProvider>
  );
}

export default App;
