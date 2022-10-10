import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Assessment from "./components/Assessment/Assessment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route
            path="/additionTest"
            element={<Assessment testCategory={"addition"} />}
          ></Route>
          <Route
            path="/multiplicationTest"
            element={<Assessment testCategory={"multiplication"} />}
          ></Route>
          <Route
            path="/subtractionTest"
            element={<Assessment testCategory={"subtraction"} />}
          ></Route>
          <Route
            path="/divisionTest"
            element={<Assessment testCategory={"division"} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
