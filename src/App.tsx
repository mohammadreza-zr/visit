import { FC, useEffect, useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import "./styles/app.style.scss";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Visit from "./pages/Visit";

const App: FC = () => {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [showFooter, setShowFooter] = useState<boolean>(true);

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];

    if (path === "visit") {
      setShowFooter(false);
      setShowHeader(false);
    }

    return () => {
      setShowFooter(true);
      setShowHeader(true);
    };
  }, [setShowHeader, setShowFooter, location.pathname]);

  return (
    <Layout showFooter={showFooter} showHeader={showHeader}>
      <div
        className="app"
        style={!showHeader ? { padding: "0", maxWidth: "none" } : {}}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visit" element={<Visit />} />

          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </div>
    </Layout>
  );
};

export default App;
