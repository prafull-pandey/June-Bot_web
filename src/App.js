import React from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import JuneChat from "./containers/JuneChat/JuneChat";

function App() {
  return (
    <div>
      <Layout>
        <JuneChat></JuneChat>
      </Layout>
    </div>
  );
}

export default App;
