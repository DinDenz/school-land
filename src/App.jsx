import React from "react";
import Main from './../src/components/Main/Main';
import Footer from "./components/Footer/Footer";
import TopSectionHeader from "./components/Header/TopSectionHeader";

function App() {
  return (
    <div className="app-wrapper">
      <TopSectionHeader />
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
