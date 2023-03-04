import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Form from "./Form";
import AnotherPage from "./AnotherPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/other" element={<AnotherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
