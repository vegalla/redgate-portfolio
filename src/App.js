import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './components/Landing';
import House from './components/House';
import Contact from './components/Contact';
import Neighborhood from './components/Neighborhood';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Landing />} />
          <Route path="house" element={<House />} />
          <Route path="neighborhood" element={<Neighborhood />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
