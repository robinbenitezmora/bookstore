import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
