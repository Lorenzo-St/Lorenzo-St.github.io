import '../styles/theme.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home'
import Projects from './projects'
function App() {
  return (
    <div>
      <title> Lorenzo St. Luce</title>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
