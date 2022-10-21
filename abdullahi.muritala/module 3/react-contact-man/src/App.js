import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';
import AddContact from './pages/AddContact';
import EditContact from './pages/EditContact';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="add" element={<AddContact />} />
          <Route path="edit/:id" element={<EditContact />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
