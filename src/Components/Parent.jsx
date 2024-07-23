import React from 'react';
import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Appss from './DragAndDrop';
import DragProvider from './DragProvider';

let nextId = 0;

export default function Parent() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <div className="container">
      <ul>
        <li>
          <h1>First</h1>
        </li>
        <li>
          <h1>Second</h1>
        </li>
        <li>
          <h1>Third</h1>
        </li>
        <li>
          <h1>Fourth</h1>
        </li>
        <li>
          <h1>Five</h1>
        </li>
      </ul>

      <Appss />
      <DragProvider />
    </div>
  );
}
