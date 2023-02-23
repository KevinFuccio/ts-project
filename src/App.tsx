import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Components/Homepage'
import ArticleMoreInfo from "./Components/ArticleMoreInfo";
import "./App.css";

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/:id" element={<ArticleMoreInfo/>}/>
  </Routes>
  </BrowserRouter>;
}

export default App;
