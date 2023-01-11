import React from 'react';
import './index.css';

// Routing
import { Routes, Route } from 'react-router-dom';

//  components

import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
