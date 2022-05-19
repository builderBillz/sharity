import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Test from "./Pages/Test";

// Components

const URL = process.env.REACT_APP_API_URL;
console.log(URL);

function App() {
  return (
    <div className="App">
      {/* <p>Hello Fantastics</p> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
