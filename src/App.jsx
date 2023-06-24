import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, NoPage, CountryDetail } from "./Pages/";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="country/:name" element={<CountryDetail />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
