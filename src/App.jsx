import { useState } from 'react';

import './App.css';
import Signup from './Components/Signup';
import Todo from './Components/Todo';
import TodoData from './Components/TodoData';
import { Route, Router, Routes } from 'react-router-dom';
import TextConverter from './Components/TextConverter';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LocalStorage from './Components/LocalStorage';
import PageNotFound from './Components/PageNotFound';
import Form from './Components/Form';
import Parent from './Components/Parent';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/todo1" element={<TodoData />} />
          <Route path="/todo2" element={<Todo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/form" element={<Form />} />
          <Route path="/converter" element={<TextConverter />} />
          <Route path="/local" element={<LocalStorage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/parent" element={<Parent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
