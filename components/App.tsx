import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { ImageMaster } from './ImageMaster';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-master" element={<ImageMaster />} />
      </Routes>
    </HashRouter>
  );
};

export default App;