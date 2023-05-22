import Friends from "./components/Friends";
import Cocktails from "./components/Cocktails";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Friends />} />
        <Route path="cocktails" element={<Cocktails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
